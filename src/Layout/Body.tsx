import Header from './Header';
import Footer from './Footer';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Body({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-10 my-32 grid min-h-full grid-cols-[500px_1fr] gap-12 max-sm:grid-cols-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
