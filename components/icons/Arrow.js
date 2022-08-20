import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7 10.3 34.4 30 14.7 49.7 20 55l25-25L20 5l-5.3 5.3Z"
      fill="#424941"
    />
  </svg>
)

export default SvgComponent
