type AddButtonProp = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

export function AddButton({ onClick, text }: AddButtonProp) {
  return <button onClick={onClick}>Add {text}</button>;
}
