import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  id: string;
  text: string;
  name: string;
  value: string;
};

type TextareaProp = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Input({
  label,
  text,
  id,
  value,
  name,
}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <input
        value={value}
        id={id}
        className="border px-2 py-2"
        placeholder={text}
        name={name}
      />
    </div>
  );
}

export function Textarea({
  label,
  value,
  name,
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
      />
    </div>
  );
}
