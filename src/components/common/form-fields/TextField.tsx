import FormControl from "@mui/material/FormControl"
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField"

type TypeProps = TextFieldProps & {}

const TextField: React.FC<TypeProps> = ({ ...restProps }) => {
  return (
    <FormControl fullWidth>
      <MuiTextField {...restProps} />
    </FormControl>
  )
}

export default TextField
