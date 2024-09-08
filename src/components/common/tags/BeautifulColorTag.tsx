import Box from "@mui/material/Box"
import { useMemo } from "react"
import { type SxProps } from "@mui/material"

enum Colors {
  Green = "green",
  Yellow = "yellow",
  Orange = "orange",
}

interface TypeProps {
  label?: string
  color?: Colors | string
  sx?: SxProps
}

const BeautifulColorTag: React.FC<TypeProps> = ({ label, color = Colors.Green, sx }) => {
  const finalColor = useMemo(() => {
    if (Object.values(Colors).includes(color as Colors)) {
      return {
        [Colors.Green]: "#14B8A6",
        [Colors.Yellow]: "#FFB020",
        [Colors.Orange]: "#F77565",
      }[color as Colors]
    }
    return color
  }, [color])

  return (
    <Box sx={sx}>
      <Box sx={{ height: "20px", position: "relative" }}>
        <Box
          component="span"
          sx={{
            display: "block",
            height: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(calc(-50% - 4.04px), -50%)",
            color: "#fff",
            zIndex: 1,
            lineHeight: "20px",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          {label}
        </Box>
        <svg
          width="47"
          height="20"
          viewBox="0 0 47 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "translateX(-4.04px)" }}
        >
          <g filter="url(#filter0_bd_5187_177)">
            <path
              d="M38.9865 16.9405L42.5451 11.2835C43.0387 10.5017 43.0387 9.49819 42.5451 8.71406L38.9865 3.05708C38.5549 2.37096 37.811 1.95789 37.0121 1.95789L7.22338 1.95789C4 1.95789 4 -0.000114441 4 -0.000114441L4 20C4 20 4 18.042 7.22338 18.042L37.0098 18.042C37.8087 18.042 38.5549 17.6266 38.9842 16.9428L38.9865 16.9405Z"
              fill={finalColor}
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_5187_177"
              x="-36"
              y="-40"
              width="118.915"
              height="100"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_5187_177"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0745098 0 0 0 0 0.180392 0 0 0 0 0.341176 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_5187_177"
                result="effect2_dropShadow_5187_177"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_5187_177"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Box>
    </Box>
  )
}

export default BeautifulColorTag
