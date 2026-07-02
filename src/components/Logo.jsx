// Rebuilt C.A.T.A. mark: four community figures linked in a ring, alternating
// C.A.T.A. blue and community green — echoing the real banner logo.
export default function Logo({ size = 40, className = '', mono = false, decorative = false }) {
  const figures = [0, 90, 180, 270]
  // mono: all figures use the inherited text color (legible on a colored fill).
  const fillFor = (i) => (mono ? 'currentColor' : i % 2 ? 'var(--blue-700)' : 'var(--leaf)')
  const a11y = decorative
    ? { 'aria-hidden': true, focusable: false }
    : { role: 'img', 'aria-label': 'C.A.T.A.' }
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      {...a11y}
    >
      {figures.map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          {/* head */}
          <circle cx="50" cy="18" r="9" fill={fillFor(i)} />
          {/* body — a rounded figure leaning toward the center ring */}
          <path
            d="M50 28c-9 0-15 6-15 15 0 6 4 10 9 11 1 3 4 5 6 5s5-2 6-5c5-1 9-5 9-11 0-9-6-15-15-15z"
            fill={fillFor(i)}
          />
        </g>
      ))}
    </svg>
  )
}
