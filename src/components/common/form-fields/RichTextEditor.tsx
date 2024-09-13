import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import ReactQuill from "react-quill"
import useClickOutside from "hooks/useClickOutside"
import { ReactNode, useCallback, useMemo, useRef } from "react"
import { bindClass } from "utils/bindClass"
import { SxProps } from "@mui/material"
import "react-quill/dist/quill.snow.css"
import styles from "assets/css/quill.module.scss"

type RichTextFieldProps = {
  label?: string | ReactNode
  className?: string
  placeholder?: string
  minHeight?: number
}

const cx = bindClass(styles)

const RichTextEditor = ({ placeholder, minHeight = 200, ...props }: RichTextFieldProps) => {
  const editorRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "bullet" }, { list: "ordered" }],
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

  const containerSx: SxProps = useMemo(
    () => ({
      "& .MuiFormControl-root": {
        height: "100%",
      },
      "& .quill": {
        minHeight: `${minHeight}px`,
      },
      "& .ql-toolbar": {
        height: "44px",
        borderRadius: "8px 8px 0 0",
        borderColor: "border.outlined",
      },
      "& .ql-container": {
        borderRadius: "0 0 8px 8px",
        borderColor: "border.outlined",
        height: "calc(100% - 44px)",
      },
      "& .ql-editor": {
        fontSize: "16px",
      },
    }),
    [minHeight]
  )

  const onFocus = useCallback(() => {
    const editorElement = document.querySelector(".quill .ql-editor") as HTMLElement
    if (!editorElement) return
    editorElement.classList.add("ql-editor__focus")
    editorRef.current = editorElement
  }, [])

  const onOutFocus = useCallback(() => {
    if (containerRef.current) {
      editorRef.current.classList.remove("ql-editor__focus")
    }
  }, [])

  useClickOutside(onOutFocus, containerRef)

  const handleChange = useCallback((value: string) => {
    console.log(value)
  }, [])

  return (
    <Box ref={containerRef} sx={containerSx}>
      <FormControl fullWidth>
        <ReactQuill
          theme="snow"
          onChange={handleChange}
          modules={quillModules}
          placeholder={placeholder}
          className={cx("ql-richtext-editor")}
          onFocus={onFocus}
          {...props}
        />
      </FormControl>
    </Box>
  )
}

export default RichTextEditor
