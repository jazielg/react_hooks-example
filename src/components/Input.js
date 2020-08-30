import React from "react";

const Input = React.forwardRef(({ type, value, onChange }, ref) => {
  return <input type={type} value={value} onChange={onChange} ref={ref} />;
});

export default Input;
