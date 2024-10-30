import { ReactNode, useState } from 'react';

type FormProps = {
  children: ReactNode;
};

export function Form({ children }: FormProps) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div
      className={`mb-5 flex flex-col gap-6 overflow-hidden rounded-xl bg-slate-100 p-6 shadow-md shadow-stone-300 transition-all duration-500 ease-in-out ${
        showForm ? 'max-h-20' : 'max-h-full'
      }`}
    >
      <button
        onClick={() => setShowForm(!showForm)}
        className="self-center justify-self-center rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white shadow-sm shadow-black ~text-base/xl"
      >
        {showForm ? 'Edit' : 'Save'} Info
      </button>
      {children}
    </div>
  );
}
