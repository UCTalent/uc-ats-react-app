import * as React from "react"
import MuiBreadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  event.preventDefault()
  console.info("You clicked a breadcrumb.")
}

const Breadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
          Core
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </MuiBreadcrumbs>
    </div>
  )
}

export default Breadcrumbs
