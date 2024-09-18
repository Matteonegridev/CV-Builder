import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  id: string;
  text: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProp = {
  id: string;
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
  onChange,
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
        onChange={onChange}
      />
    </div>
  );
}

export function Textarea({
  label,
  value,
  name,
  id,
  onChange,
}: TextareaProp): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <textarea
        id={id}
        className="w-full resize-none overflow-y-hidden border p-2 ~h-14/28"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}
