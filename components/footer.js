import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 fixed bottom-0 w-full  dark:bg-black bg-white">
      <Container>
        <div className="h-56 flex flex-col md:flex-row justify-center items-center font-mono ">
          <div className="flex flex-col md:w-1/2">
            <address className="not-italic tracking-tighter leading-tight text-center md:text-left lg:mb-0 lg:pr-4">
              Написал{" "}
              <a
                className="hover:underline underline-offset-2"
                rel="author"
                href="https://github.com/IlyaSmagin"
              >
                @la_la_code
              </a>
            </address>
            <div className="text-center md:text-left">
              Это проект с{" "}
              <a
                className="underline"
                href="https://github.com/IlyaSmagin/la_la_blog"
              >
                открытым исходным кодом
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end items-center md:pl-4 md:w-1/2 mt-8 md:mt-0">
            <a
              href="https://commonmark.org/help/"
              className="mx-3 font-bold hover:underline"
            >
              Формат
            </a>
            <a
              href="https://github.com/IlyaSmagin/la_la_blog/new/main/_posts"
              className="mx-3 bg-black hover:bg-white hover:text-black border dark:hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:border-white border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors"
            >
              Написать
            </a>
          </div>
        </div>
        <aside className="font-mono fixed top-4 right-12">
          Багов не существует, только счастливые опечатки...
        </aside>
      </Container>
    </footer>
  );
}
