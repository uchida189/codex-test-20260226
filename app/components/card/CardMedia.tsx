import Image from "next/image";

type CardMediaProps = {
  name: string;
  imageUrl: string;
};

export function CardMedia({ name, imageUrl }: CardMediaProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
      <Image
        src={imageUrl}
        alt={`${name} のイメージ画像`}
        width={640}
        height={360}
        className="h-44 w-full object-cover"
        priority={false}
      />
    </div>
  );
}
