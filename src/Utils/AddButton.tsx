type AddButtonProp = {
  onClick: () => void;
  text: string;
};

export function AddButton({ onClick, text }: AddButtonProp) {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      onClick={onClick}
    >
      Add {text}
    </button>
  );
}
