import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  text: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
  value,
  name,
  onChange,
}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="pb-2 font-semibold ~text-base/xl">{label}</label>
      <input
        value={value}
        className="rounded-md border bg-slate-100 px-2 py-2 font-mono font-thin shadow-inner shadow-primary focus-within:outline-1 focus:outline-primary"
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
  onChange,
}: TextareaProp): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="pb-2 pt-2 font-semibold ~text-base/xl">{label}</label>
      <textarea
        className="resize-none overflow-auto rounded-md border bg-slate-100 p-2 font-mono shadow-inner shadow-primary ~h-14/28 focus:outline-primary"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}
