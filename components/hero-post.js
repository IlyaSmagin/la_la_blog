import Link from "next/link";

export default function HeroPost({ title, excerpt, slug }) {
  return (
    <section className="mb-8">
      <div className="mt-36 md:mt-72 mb-8 md:mb-16"></div>
      <Link href={`/posts/${slug}`}>
        <div className="group hover:cursor-pointer md:grid md:grid-cols-3 items-end place md:gap-x-8 py-2 md:py-4 border-y-2 border-black dark:border-white">
          <h3 className="text-4xl lg:text-6xl leading-tight">
            <a className="group-hover:underline font-bold">{title}</a>
          </h3>
          <p className="col-span-2 text-lg leading-relaxed md:text-right">
            {excerpt}
          </p>
        </div>
      </Link>
    </section>
  );
}
