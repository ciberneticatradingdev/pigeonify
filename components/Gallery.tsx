import Image from "next/image";

const samples = [
  { src: "/samples/sample_01.png", label: "Street Pigeon" },
  { src: "/samples/sample_02.png", label: "Glam Pigeon" },
  { src: "/samples/sample_03.png", label: "Chef Pigeon" },
  { src: "/samples/sample_04.png", label: "Grad Pigeon" },
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-black gradient-text mb-3">
          Hall of Pigeons
        </h2>
        <p className="text-gray-500">
          Previous victims — er, satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {samples.map((sample, i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-2xl overflow-hidden glass
                       hover:scale-[1.03] transition-all duration-500 cursor-pointer
                       hover:ring-2 hover:ring-[var(--pigeon-iridescent)]/30"
          >
            <Image
              src={sample.src}
              alt={sample.label}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100
                         transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            >
              <span className="text-sm font-bold text-white">
                🐦 {sample.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
