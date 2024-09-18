type AddButtonProp = {
  onClick: () => void;
  text: string;
};

export function AddButton({ onClick, text }: AddButtonProp) {
  return <button onClick={onClick}>Add {text}</button>;
}
