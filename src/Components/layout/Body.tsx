type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function Body({ children }: Props) {
  return <main className="min-h-full bg-gray-200 m-5">{children}</main>;
}
