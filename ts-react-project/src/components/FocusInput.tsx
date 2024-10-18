import { useRef } from "react";

const FocusInput = () => {
  const inpFocus = useRef<null | HTMLInputElement>(null);
  const handleClick = () => {
    inpFocus.current?.focus();
  };
  return (
    <div>
      <input
        ref={inpFocus}
        type="text"
        name=""
        id=""
        placeholder="Enter Focus"
      />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default FocusInput;
