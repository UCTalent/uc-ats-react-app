import { FC } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import IconCaretDown from "assets/icons/select-caret.svg"
import IconSVG from "components/common/IconSVG"

interface IProps {
  page: number
  totalPage: number
  onPrevious: () => void
  onNext: () => void
}

const FooterPagination: FC<IProps> = ({ page, totalPage, onPrevious, onNext }) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        minHeight: "48px",
        px: "28px",
        position: "sticky",
        bottom: 0,
        bgcolor: "background.accent",
      }}
    >
      <Stack flexDirection="row" alignItems="center" justifyContent="end" sx={{ height: "48px" }}>
        <IconButton onClick={onPrevious} disabled={page === 1} sx={{ opacity: page === 1 && 0.2 }}>
          <IconSVG src={IconCaretDown} alt="Previous" style={{ transform: "rotate(90deg)" }} />
        </IconButton>
        Page {page}/ {totalPage}
        <IconButton
          onClick={onNext}
          disabled={page === totalPage}
          sx={{ opacity: page === totalPage && 0.2 }}
        >
          <IconSVG src={IconCaretDown} alt="Previous" style={{ transform: "rotate(-90deg)" }} />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default FooterPagination
