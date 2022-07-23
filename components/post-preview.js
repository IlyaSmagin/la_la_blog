import Link from "next/link";

export default function PostPreview({ num, title, slug, excerpt }) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="group hover:cursor-pointer divide-y-2 divide-black dark:divide-white border-b-2 border-black dark:border-white">
        <div className="text-2xl font-bold md:mb-4 text-right">
          {"0" + (1 + num)}
        </div>
        <h3 className="text-3xl font-bold md:mb-3 leading-snug">
          <a className="group-hover:underline">{title}</a>
        </h3>
        <p className="text-lg leading-relaxed md:mb-2">{excerpt}</p>
      </div>
    </Link>
  );
}
