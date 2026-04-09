import { TextInput, Text, TextInputProps } from "react-native";

interface InputProps{
    title: string;
    placeholder: string;
    keyboardType?: TextInputProps['keyboardType'];
}

export function Input({placeholder,title,keyboardType = "default"}:InputProps) {
    return(
        <>
            <Text>{title}</Text>
            <TextInput placeholder={placeholder} keyboardType={keyboardType} />
        </>
    )
}