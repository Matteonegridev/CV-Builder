import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputProps<T> = {
  label: string;
  text: string;
  name: keyof T;
  value: string;
  setData: Dispatch<SetStateAction<T>>;
};

type TextareaProp = {
  label: string;
  name: string;
  value: string;
  text: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Input<T>({
  label,
  text,
  value,
  name,
  setData,
}: InputProps<T>): JSX.Element {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <input
        value={value}
        className="border px-2 py-2"
        placeholder={text}
        name={name as string}
        onChange={handleChange}
      />
    </div>
  );
}

export function Textarea({
  label,
  value,
  name,
  text,
  onChange,
}: TextareaProp): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <textarea
        className="w-full resize-none overflow-y-hidden border p-2 ~h-14/28"
        onChange={onChange}
        value={value}
        name={name}
        placeholder={text}
      />
    </div>
  );
}
