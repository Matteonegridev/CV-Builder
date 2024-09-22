import { ReactNode } from 'react';

type ResumeProp = {
  children: ReactNode;
};

export function Resume({ children }: ResumeProp): JSX.Element {
  return (
    <section className="min-h-screen border border-slate-700 p-4">
      {children}
    </section>
  );
}
