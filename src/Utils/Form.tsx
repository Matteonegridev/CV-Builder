import { ReactNode } from "react";

type FormProps = {
    children: ReactNode;
    edit: boolean;
    setEdit: (edit: boolean) => void;
  }

  export function Form({children, edit, setEdit}: FormProps){
    return (
      <form
      className={`flex flex-col gap-4 shadow-md p-6 transition-all ease-in-out duration-500 overflow-hidden ${
        edit ? 'max-h-20' : 'max-h-[600px]'
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        setEdit(!edit);
      }}
    >
      {children}
    </form>
    )
    }