import "./button.css";

const Button = (props) => {
   const { children, type, onClick, styles } = props;

   return (
      <button type={type} onClick={onClick} className={`btn-default ${styles}`}>
         {children}
      </button>
   );
};

export default Button;
