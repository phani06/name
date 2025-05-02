export default function PatternBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-[0.15]">
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle id="pattern-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
      </svg>
    </div>
  )
}
