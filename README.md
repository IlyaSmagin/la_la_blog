# [La_la_blog](https://la-la-blog.vercel.app/)

## A statically generated blog using Next.js and Markdown

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

---

## Stack

To create the blog posts [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) are used. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter).

This blog uses [Tailwind CSS](https://tailwindcss.com) (v3.1.6) for styling.
