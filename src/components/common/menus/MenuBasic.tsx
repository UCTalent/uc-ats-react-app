import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useId, useState, type ReactNode } from "react"
import { type SxProps } from "@mui/material"

export interface IMenuItem {
  id: string | number
  title: string
  onClick: () => void | Promise<void>
  icon?: ReactNode
}

interface TypeProps {
  children: ReactNode
  menu: IMenuItem[]
  sx?: SxProps
}

const MenuBasic: React.FC<TypeProps> = ({ children, menu, sx }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const triggerId = useId()
  const menuId = useId()

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Box
        component="button"
        id={triggerId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: "16px",
          minHeight: "16px",
          width: "fit-content",
          height: "fit-content",
          p: 0,
          border: "none",
          bgcolor: "transparent",
          cursor: "pointer",
          ...sx,
        }}
      >
        {children}
      </Box>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": triggerId,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ "& .MuiPaper-root": { borderRadius: "12px" } }}
      >
        {menu.map((item) => (
          <MenuItem key={item.id} onClick={item.onClick}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default MenuBasic
