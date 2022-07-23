import Link from "next/link";
import Container from "../components/container";

export default function FourOhFour() {
  return (
    <Container>
      <div className="font-mono flex-col items-start flex justify-between pt-12 dark:text-white">
        <Link href="/">
          <h1 className="text-6xl md:text-7xl cursor-pointer tracking-tighter leading-tight md:pl-8">
            Ла_ла_баг
          </h1>
        </Link>
      <h1 className="dark:text-white py-8 px-0 md:p-14 text-4xl md:text-5xl lg:text-6xl">
        Такой страницы пока нет.
      </h1>
      <h1 className="dark:text-white pl-0 md:pl-20 text-4xl md:text-5xl lg:text-6xl">
        Но возможно она появится...
      </h1>
      <div className="h-full w-full dotted"></div>
      </div>
    </Container>
  );
}
