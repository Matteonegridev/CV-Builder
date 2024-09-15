type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Body({ children }: Props) {
  return <main className="grid grid-cols-[500px_1fr] gap-12 min-h-full m-10 max-sm:grid-cols-1">{children}</main>;
}
