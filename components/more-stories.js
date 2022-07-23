import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-8 mb-8">
        {posts.map((post, index) => (
          <PostPreview
            num={index}
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
