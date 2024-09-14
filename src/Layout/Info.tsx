type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function InfoSection({ children }: Props) {
  return <section className="">{children}</section>;
}
