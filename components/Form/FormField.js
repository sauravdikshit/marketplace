import { View,onPress} from "react-native";
import PropTypes from "prop-types";
import { Text } from "react-native-paper";
import React,{useState,useContext,useEffect,useCallback } from "react";
import { TextInput,useTheme } from "react-native-paper";
import { evaluateSpecs } from "../../specifications/form-field-specs";
import { FormContext } from "./context";



const FormField = ({
  label,
  mode = "outlined",
  value,
  onChangeText,
  keyboardType = "default",
  validations = [],
  limit = -1,
  right,
  icon,
  secureTextEntry,
  onPress,


  ...additionalProps
}) => {
  const [error, setError] = useState("");

  const formContext = useContext(FormContext);

  useEffect(() => {
    formContext.setIsValid(!evaluateSpecs(validations, value));
  }, [formContext, validations, value]);

  const onBlur = useCallback(() => {
    const errorMessage = evaluateSpecs(validations, value);
    setError(errorMessage);
  }, [validations, value]);

  const theme = useTheme();
  return (
    <View className="flex w-full " {...additionalProps}>
      <TextInput
        className=""
        label={label}
        mode={mode}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => {
          if (error) {
            setError("");
          }
          if (limit !== -1 && text.length > value.length && text.length > limit)
            return;

          onChangeText(text);
        }}
        onBlur={onBlur}
        error={!!error}
        secureTextEntry={secureTextEntry}
        right={
              <TextInput.Icon
                icon={icon}
               
               onPress={onPress}
              />
            }
      />
       {error && <Text className="mt-2 ml-2 text-md "  style={{ color: theme.colors.error }}>{error}</Text>}
    </View>
  );
};
FormField.propTypes = {
  
  label: PropTypes.string.isRequired,
  mode: PropTypes.string,
  value: PropTypes.string.isRequired,



  onChangeText: PropTypes.func.isRequired,
  limit: PropTypes.number,
  keyboardType: PropTypes.string,
  validations: PropTypes.arrayOf(
    PropTypes.shape({
      isValid: PropTypes.func.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

FormField.defaultProps = {
  mode: "outlined",
  limit: -1,
  keyboardType: "default",
  validations: [],
};

export default FormField;
