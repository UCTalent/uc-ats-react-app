import { useMemo } from "react"
import { FormControl, useTheme } from "@mui/material"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

type RichTextFieldProps = {
  label?: string | React.ReactNode
  className?: string
  placeholder?: string
  minHeight?: number
}

const RichTextEditor = ({ placeholder, minHeight = 200, ...props }: RichTextFieldProps) => {
  const { palette } = useTheme()
  const handleChange = (value: string) => {
    console.log(value)
  }

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
        handlers: {
          image: () => {},
        },
        history: {
          delay: 500,
          maxStack: 100,
          userOnly: true,
        },
        clipboard: {
          matchVisual: false,
        },
      },
    }),
    []
  )

  return (
    <FormControl
      fullWidth
      sx={{
        "& .ql-toolbar.ql-snow": {
          height: "44px",
          borderRadius: "8px 8px 0 0",
          borderColor: palette.border.outlined,
        },
        "& .ql-toolbar.ql-snow .ql-formats .ql-active": {
          color: palette.primary.main,
        },
        "& .ql-container.ql-snow": {
          borderRadius: "0 0 8px 8px",
          borderColor: palette.border.outlined,
        },
        "& .ql-editor": {
          minHeight: `${minHeight}px`,
          fontSize: "16px",
        },
      }}
    >
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        modules={quillModules}
        placeholder={placeholder}
        {...props}
      />
    </FormControl>
  )
}

export default RichTextEditor
