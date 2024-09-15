
type InputProps ={
    label:string,
    text:string
  }
  
  
  
  export function Input({label,text}:InputProps){
  
  return(
      <div className="flex flex-col">
        <label className="~text-base/xl">{label}</label>
        <input className="border py-2 px-2" placeholder={text} />
      </div>
  )
  }
  