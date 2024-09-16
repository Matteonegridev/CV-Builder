type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export function InfoSection({ children }: Props): JSX.Element {
  return <section className="">{children}</section>;
}
