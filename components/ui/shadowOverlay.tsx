export default function ShadowOverlay({
  color = 'bg-primary',
  opacity = 'opacity-20',
  blur = 'blur-[120px]',
  size = 'h-100 w-150',
  zIndex = '-z-10',
  className = '',
}) {
  return (
    <div
      className={`
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
        ${color} 
        ${opacity} 
        ${blur} 
        ${size}
        ${zIndex}
        ${className}
      `}
      aria-hidden="true"
    />
  )
}
