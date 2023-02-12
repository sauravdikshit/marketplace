import { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "react-native-paper";
import { FormContext } from "./context";

export default function FormSubmit({
  children,
  className = "",
  mode = "contained",
  ...additionalProps
}) {
  const formContext = useContext(FormContext);

  return (
    <Button
    mode={mode}
    disabled={!formContext.isValid }
    className={`py-1 px-2 rounded-3xl ${className}`}
    
  
    {...additionalProps}
  >
    {children}
  </Button>
  );
}


FormSubmit.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  mode: PropTypes.string
};

FormSubmit.defaultProps = {
  className: "",
  mode: "contained"
};

