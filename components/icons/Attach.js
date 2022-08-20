import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 71 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M48.701 18.167v33.767c0 6.489-5.256 11.744-11.745 11.744-6.489 0-11.745-5.255-11.745-11.744V15.23a7.343 7.343 0 0 1 7.341-7.34 7.343 7.343 0 0 1 7.34 7.34v30.83a2.945 2.945 0 0 1-2.936 2.936 2.945 2.945 0 0 1-2.936-2.936V18.167h-4.404V46.06a7.343 7.343 0 0 0 7.34 7.34 7.343 7.343 0 0 0 7.34-7.34v-30.83c0-6.49-5.255-11.745-11.744-11.745S20.807 8.742 20.807 15.23v36.703c0 8.926 7.223 16.149 16.15 16.149 8.925 0 16.148-7.223 16.148-16.15V18.168h-4.404Z"
        fill="#424941"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.254 .549)"
          d="M0 0h70.469v70.469H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
