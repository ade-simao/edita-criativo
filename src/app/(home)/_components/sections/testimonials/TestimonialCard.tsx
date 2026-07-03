import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  comment: string;
};

export function TestimonialCard({ name, role, image, comment }: Props) {
  return (
    <article className="min-w-95 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
      <p className="leading-8 text-muted-foreground">{comment}</p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{name}</h4>

          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
}
