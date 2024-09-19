import { ReactNode, useState } from 'react';

type FormProps = {
  children: ReactNode;
};

export function Form({ children }: FormProps) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div
      className={`flex flex-col gap-4 overflow-y-auto p-6 shadow-md transition-all duration-500 ease-in-out ${
        showForm ? 'max-h-20' : 'max-h-[600px]'
      }`}
    >
      <button
        onClick={() => setShowForm(!showForm)}
        className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl"
      >
        {showForm ? 'Edit' : 'Save'} Info
      </button>
      {children}
    </div>
  );
}
