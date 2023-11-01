import "/public/button.css";

const Button = ({ label, operation, double, triple, ...props }) => {
  return (
    <button
      onClick={() => props.click && props.click(label)}
      className={`
    button
    ${operation ? "operation" : ""}
    ${double ? "double" : ""}
    ${triple ? "triple" : ""}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
