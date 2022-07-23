import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <div className="relative z-0 dark:text-white dark:bg-black bg-white">
      <Meta />
      <div className="min-h-screen relative dark:bg-black bg-white mb-56 pb-12 z-10 border-b border-accent-2">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
