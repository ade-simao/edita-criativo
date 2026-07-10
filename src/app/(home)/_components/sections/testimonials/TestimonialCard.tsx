import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  comment: string;
};

export function TestimonialCard({ name, role, image, comment }: Props) {
  return (
    <article className="group relative h-full rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
      <div className="mb-6 text-6xl font-serif leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary/40">
        “
      </div>
      <p className="leading-8 text-muted-foreground min-h-32 transition-colors duration-300 group-hover:text-foreground">
        {comment}
      </p>

      <div className="mt-8 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-base text-primary">
            ★
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover ring-2 ring-border transition-all duration-300 group-hover:ring-primary"
        />

        <div>
          <h4 className="font-semibold transition-colors duration-300 group-hover:text-primary">
            {name}
          </h4>

          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
}
