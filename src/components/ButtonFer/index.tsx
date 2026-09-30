import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonFerProps extends TouchableOpacityProps {
  onFunctionButton?: () => void;
  titleButton?: string;
  icon?: ReactNode;
  contorno?: boolean;
  styleButton?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
}

export default function ButtonFer({
  onFunctionButton,
  titleButton,
  icon,
  contorno = false,
  styleButton,
  styleTitle,
  ...rest
}: ButtonFerProps) {
  return (
    <TouchableOpacity
      {...rest}
      onPress={onFunctionButton}
      activeOpacity={0.8}
      style={[estilos.button, contorno && estilos.buttonContorno, styleButton]}
    >
      {icon}
      {titleButton && (
        <Text
          style={[
            estilos.buttonText,
            contorno && estilos.textContorno,
            icon ? { marginLeft: 8 } : null,
            styleTitle,
          ]}
        >
          {titleButton}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#E8A0BF",
    borderRadius: 30,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#E8A0BF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    alignSelf: "center",
  },
  buttonContorno: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#E8A0BF",
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  textContorno: {
    color: "#D46A92",
  },
});