type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Body({ children }: Props) {
  return (
    <main className="m-10 grid min-h-full grid-cols-[500px_1fr] gap-12 max-sm:grid-cols-1">
      {children}
    </main>
  );
}
