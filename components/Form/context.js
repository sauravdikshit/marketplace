import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const FormContext = createContext({
  isValid: false,
  setIsValid: () => {}
});

export default function Form({ children }) {
  const [isValid, setIsValid] = useState(false);

  const value = useMemo(
    () => ({
      isValid,
      setIsValid
    }),
    [isValid]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
