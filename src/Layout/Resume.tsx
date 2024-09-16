import { ReactNode } from 'react';

type ResumeProp = {
  children: ReactNode;
};

export function Resume({ children }: ResumeProp): JSX.Element {
  return <section className="">{children}</section>;
}
