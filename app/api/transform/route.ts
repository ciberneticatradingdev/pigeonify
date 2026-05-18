import { NextRequest, NextResponse } from "next/server";
import OpenAI, { toFile } from "openai";
import sharp from "sharp";
import { readFile } from "fs/promises";
import { join } from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const STYLE_REFS = ["ref1.png", "ref2.png", "ref3.png"];

const PIGEONIFY_PROMPT = `The first 3 images are style references showing pigeons in human clothing/poses. Apply this EXACT same pigeon transformation to the person in the 4th image (the target photo). Replace the person's head with a realistic pigeon head while keeping their exact body, pose, clothing, and background. The pigeon head should have detailed feathers, a pigeon beak, and round pigeon eyes. Make it look like a photorealistic portrait of a pigeon wearing the person's outfit. Match the moody, professional portrait lighting of the references. Keep everything about the original photo except the head becomes a pigeon head.`;

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const imageFile = formData.get("image") as File | null;

    if (!imageFile) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    if (!imageFile.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload an image." },
        { status: 400 }
      );
    }

    if (imageFile.size > 20 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image too large. Maximum 20MB." },
        { status: 400 }
      );
    }

    // Optimize user image
    const bytes = await imageFile.arrayBuffer();
    const optimizedBuffer = await sharp(Buffer.from(bytes))
      .resize(1024, 1024, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer();

    // Load style references + user image
    const images: File[] = [];
    const refDir = join(process.cwd(), "public", "style-refs");

    for (const ref of STYLE_REFS) {
      const data = await readFile(join(refDir, ref));
      images.push(new File([data], ref, { type: "image/png" }));
    }

    const userFile = await toFile(optimizedBuffer, "user_photo.jpg", {
      type: "image/jpeg",
    });
    images.push(userFile as unknown as File);

    const response = await openai.images.edit({
      model: "gpt-image-1",
      image: images,
      prompt: PIGEONIFY_PROMPT,
      n: 1,
      size: "1024x1024",
      quality: "low",
    });

    const generatedImage = response.data?.[0];
    if (!generatedImage?.b64_json) {
      return NextResponse.json(
        { error: "Failed to generate pigeonified image" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: `data:image/png;base64,${generatedImage.b64_json}`,
    });
  } catch (error: unknown) {
    console.error("Pigeonification error:", error);

    if (error instanceof OpenAI.APIError) {
      if (error.status === 429) {
        return NextResponse.json(
          { error: "Rate limited. Please wait a moment and try again." },
          { status: 429 }
        );
      }
      if (error.status === 403) {
        return NextResponse.json(
          { error: "API access denied." },
          { status: 403 }
        );
      }
      return NextResponse.json(
        { error: `API error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error during pigeonification" },
      { status: 500 }
    );
  }
}
