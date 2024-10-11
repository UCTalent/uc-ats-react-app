import { IconProps } from "types/common"

const UnCheckedCheckBox = ({ width = 18, height = 18, ...props }: IconProps) => (
  <svg
    width={height}
    height={width}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.612 0.666992H5.38783C2.55651 0.666992 0.666992 2.69416 0.666992 5.59699V12.4037C0.666992 15.3093 2.55147 17.3337 5.38783 17.3337H12.6112C15.4483 17.3337 17.3337 15.3093 17.3337 12.4037V5.59699C17.3337 2.69158 15.4485 0.666992 12.612 0.666992ZM5.38783 1.91699H12.612C14.7374 1.91699 16.0837 3.3628 16.0837 5.59699V12.4037C16.0837 14.6379 14.7373 16.0837 12.6112 16.0837H5.38783C3.26263 16.0837 1.91699 14.6381 1.91699 12.4037V5.59699C1.91699 3.36564 3.26728 1.91699 5.38783 1.91699Z"
      fill="#121619"
    />
  </svg>
)

export default UnCheckedCheckBox
