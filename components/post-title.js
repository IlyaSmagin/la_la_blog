export default function PostTitle({ children }) {
  return (
    <h1 className="sticky break-words top-12 mb-12 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-left">
      {children}
    </h1>
  )
}
