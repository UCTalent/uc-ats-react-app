import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import IconSVG from "components/common/IconSVG"
import IconMoveNext from "assets/icons/move-next.svg"

const CandidateBoardToolBar = () => {
  return (
    <Stack flexDirection="row" sx={{ minHeight: "48px", alignItems: "center", gap: "4px" }}>
      <IconButton sx={{ width: "32px", height: "32px" }}>
        <IconSVG
          src={IconMoveNext}
          alt="setting"
          width="32px"
          height="32px"
          style={{ transform: "rotate(180deg)" }}
        />
      </IconButton>
      <IconButton sx={{ width: "32px", height: "32px" }}>
        <IconSVG src={IconMoveNext} alt="setting" width="32px" height="32px" />
      </IconButton>
    </Stack>
  )
}

export default CandidateBoardToolBar
