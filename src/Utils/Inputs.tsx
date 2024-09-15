import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  text: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProp = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Input({ label, text, name, onChange }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <input
        className="border py-2 px-2"
        placeholder={text}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export function Textarea({ label, value, name, onChange }: TextareaProp) {
  return (
    <div className="flex flex-col">
      <label className="~text-base/xl">{label}</label>
      <textarea
        className="border resize-none w-full ~h-14/28 p-2 overflow-y-hidden "
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}
