import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 79 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M39.378 45.849c5.407 0 9.74-4.365 9.74-9.772l.032-19.545a9.759 9.759 0 0 0-9.772-9.772 9.759 9.759 0 0 0-9.772 9.772v19.545a9.759 9.759 0 0 0 9.772 9.772Zm17.264-9.772c0 9.772-8.274 16.612-17.264 16.612s-17.264-6.84-17.264-16.612h-5.538c0 11.107 8.86 20.293 19.545 21.89V68.65h6.514V57.966c10.684-1.563 19.545-10.75 19.545-21.89h-5.538Z"
        fill="#424941"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.29 .246)"
          d="M0 0h78.177v78.177H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
