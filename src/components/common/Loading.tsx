import { CircularProgress } from "@mui/material"
import { Box } from "@mui/system"
import { useRecoilValue } from "recoil"
import { loadingAtom } from "store/loadingAtom"

type Props = {
  isLoading?: boolean
}

export const Loading = ({ isLoading = false }: Props) => {
  const loadingState = useRecoilValue(loadingAtom)
  return (
    (loadingState.loading || isLoading) && (
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000000,
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    )
  )
}
