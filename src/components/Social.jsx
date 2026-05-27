import { useEffect, useRef } from 'react'
import moment1 from '../assets/moment-1.png'
import moment2 from '../assets/moment-2.png'
import moment3 from '../assets/moment-3.png'
import reel1 from '../assets/reel-1.mp4'
import reel2 from '../assets/reel-2.mp4'

const items = [
  { type: 'image', src: moment1 },
  { type: 'image', src: moment2 },
  { type: 'video', src: reel1 },
  { type: 'image', src: moment3 },
  { type: 'video', src: reel2 },
]

export default function Social() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.sr')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="social" ref={ref}>
      <div className="wrap">
        <div className="social__head sr">
          <span className="section-label">من المحل للناس</span>
          <h2 className="section-title">لحظات أشطوطة</h2>
        </div>

        <div className="social__grid">
          {items.map((item, i) => (
            <a
              key={i}
              href="https://instagram.com/ashtotasy"
              target="_blank" rel="noopener noreferrer"
              className={`social__item sr`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {item.type === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline />
              ) : (
                <img src={item.src} alt="أشطوطة" loading="lazy" />
              )}
              {i === 2 && <span className="social__handle">@ashtotasy</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
