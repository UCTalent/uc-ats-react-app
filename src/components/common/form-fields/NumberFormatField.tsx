import FormControl from "@mui/material/FormControl"
import { NumericFormat, NumericFormatProps } from "react-number-format"
import { useState, useEffect } from "react"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import useDebounce from "hooks/useDebounce"

type TypeProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
} & Omit<TextFieldProps, "inputRef"> &
  Omit<NumericFormatProps, "onChange" | "customInput">

const NumberFormatField = <T extends FieldValues>({
  control,
  name,
  label,
  ...restProps
}: TypeProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control })

  const [inputValue, setInputValue] = useState<string>(value.toString())
  const debouncedValue = useDebounce(inputValue)

  useEffect(() => {
    setInputValue(value.toString())
  }, [value])

  useEffect(() => {
    const parseNumber = parseFloat(debouncedValue.replace(/,/g, ""))
    onChange(parseNumber)
  }, [debouncedValue, onChange])

  return (
    <FormControl fullWidth>
      <NumericFormat
        {...restProps}
        inputRef={ref}
        label={label}
        value={value === 0 ? "" : value}
        thousandSeparator
        customInput={TextField}
        error={invalid}
        helperText={error ? error.message : restProps.helperText}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={onBlur}
      />
    </FormControl>
  )
}

export default NumberFormatField
