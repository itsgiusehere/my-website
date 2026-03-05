/**
 * Carousel dot navigation.
 * Controlled component — parent owns currentIndex.
 *
 * @param {{ total: number, currentIndex: number, onSelect: (i: number) => void }} props
 */
export default function CarouselDots({ total, currentIndex, onSelect }) {
  return (
    <div className="carousel-dots" role="tablist" aria-label="Work cards navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === currentIndex}
          aria-label={`Card ${i + 1}`}
          className={`carousel-dot${i === currentIndex ? ' carousel-dot--active' : ''}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
