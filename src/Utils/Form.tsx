import { ReactNode, useState } from 'react';

type FormProps = {
  children: ReactNode;
  text: string;
};

export function Form({ children, text }: FormProps) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div
      className={`mb-5 flex flex-col gap-6 overflow-hidden rounded-xl bg-slate-100 p-6 shadow-md shadow-stone-300 transition-all duration-500 ease-in-out ${
        showForm ? 'max-h-20' : 'max-h-full'
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-left font-headings font-semibold text-gray-400 ~text-base/3xl">
          {text}
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="self-center justify-self-center rounded-lg bg-blue-500 px-5 py-2 font-normal text-white shadow-sm shadow-black ~text-base/lg"
        >
          {showForm ? 'Edit' : 'Save'} Info
        </button>{' '}
      </div>
      {children}
    </div>
  );
}
