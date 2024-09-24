type AddButtonProp = {
  onClick: () => void;
  text: string;
};

type IsCollapsedButtonProp<T extends { id?: string; isCollapsed?: boolean }> = {
  text: string;
  id: string;
  setAll: React.Dispatch<React.SetStateAction<T[]>>;
  className: string;
};

type RemoveButtonProps<T extends { id?: string }> = {
  text: string;
  id: string;
  setAll: React.Dispatch<React.SetStateAction<T[]>>;
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

export function IsCollapsedButton<
  T extends { id?: string; isCollapsed?: boolean },
>({ text, id, className, setAll }: IsCollapsedButtonProp<T>) {
  const toggleIsCollapsed = (
    id: string,
    setAll: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    setAll((prev) =>
      prev.map((value: T) =>
        value.id === id ? { ...value, isCollapsed: !value.isCollapsed } : value,
      ),
    );
  };

  return (
    <button className={className} onClick={() => toggleIsCollapsed(id, setAll)}>
      {text}
    </button>
  );
}

export function RemoveButton<T extends { id?: string }>({
  text,
  setAll,
  id,
}: RemoveButtonProps<T>) {
  const handleRemove = (
    id: string,
    setAll: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    setAll((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <button
        className="rounded border border-blue-500 px-4 py-2 ~text-xs/lg hover:bg-blue-700 hover:text-white"
        onClick={() => handleRemove(id, setAll)}
      >
        {text}
      </button>
    </>
  );
}
