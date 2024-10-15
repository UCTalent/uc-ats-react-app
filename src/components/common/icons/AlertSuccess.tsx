import { IconProps } from "types/common"

export const AlertSuccess = ({ width = "20", height = "21", ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.67 0.5H14.34C17.73 0.5 20 2.88 20 6.42V14.591C20 18.12 17.73 20.5 14.34 20.5H5.67C2.28 20.5 0 18.12 0 14.591V6.42C0 2.88 2.28 0.5 5.67 0.5ZM9.42998 13.49L14.18 8.73999C14.52 8.4 14.52 7.85 14.18 7.5C13.84 7.16 13.28 7.16 12.94 7.5L8.80998 11.63L7.06 9.87999C6.72 9.53999 6.16 9.53999 5.82 9.87999C5.48 10.22 5.48 10.77 5.82 11.12L8.19998 13.49C8.36998 13.66 8.58998 13.74 8.80998 13.74C9.03998 13.74 9.25998 13.66 9.42998 13.49Z"
      fill="#14B8A6"
    />
  </svg>
)
