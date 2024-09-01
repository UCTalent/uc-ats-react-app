/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import FormControl from "@mui/material/FormControl"
import { NumericFormat } from "react-number-format"
import { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import useDebounce from "hooks/useDebounce"
import { type InputProps } from "@mui/material"

type TProps = InputProps & {
  label: string
  value: number | string
  onDebounceChange?: (value: number) => void
}

const NumberFormatField: React.FC<TProps> = (props) => {
  const { onDebounceChange, value, label, ...restProps } = props || {}
  const [inputValue, setInputValue] = useState<string>(value.toString())
  const debouncedValue = useDebounce(inputValue)

  useEffect(() => {
    setInputValue(value.toString())
  }, [value])

  useEffect(() => {
    if (!onDebounceChange) return
    const parseNumber = parseFloat(debouncedValue.replace(/,/g, "")) || 0
    onDebounceChange(parseNumber)
  }, [debouncedValue])

  return (
    <FormControl fullWidth>
      <NumericFormat
        label={label}
        value={inputValue}
        thousandSeparator
        onChange={(e) => setInputValue(e.target.value)}
        customInput={TextField}
        InputProps={restProps}
      />
    </FormControl>
  )
}

export default NumberFormatField
