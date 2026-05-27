import { useEffect, useRef, useState } from 'react'

const trendItems = ['كشري المجنون', 'الكيك الترند', 'ميلك كيك', 'أشطوطة الجديدة']

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal,.reveal-right,.reveal-left')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.15 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L.057 23.493a.75.75 0 00.92.92l5.635-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.932 0-3.742-.518-5.29-1.422l-.38-.222-3.34.874.875-3.34-.222-.38A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function Categories() {
  const halwRef = useReveal()
  const trendRef = useReveal()
  const baredRef = useReveal()

  const [activeIdx, setActiveIdx] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % trendItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="categories" id="منتجاتنا">

      {/* Panel 1 — الحلو */}
      <div className="cat-panel cat-panel-halw" ref={halwRef}>
        <div className="cat-content">
          <span className="cat-tag reveal delay-1">SWEETS</span>
          <h2 className="cat-title reveal delay-2">الحلو<br />كلو<br /><span style={{color:'var(--green)'}}>إلك.</span></h2>
          <p className="cat-desc reveal delay-3">
            من أشطوطة الكريمة للكيكات والحلويات المجنونة — بوصفات أصيلة بتجنن.
          </p>
          <a href="https://wa.me/905393752925" target="_blank" rel="noopener noreferrer"
            className="cat-cta reveal delay-4">
            {WA_ICON} اعرف الأصناف
          </a>
        </div>
        <div className="cat-visual">
          <div className="cat-orb cat-orb-halw">
            <span className="cat-orb-emoji">🍮</span>
            <span className="cat-orb-label">حلويات أصيلة</span>
          </div>
        </div>
      </div>

      {/* Panel 2 — الترند */}
      <div className="cat-panel cat-panel-trend" ref={trendRef}>
        <div className="cat-content">
          <span className="cat-tag reveal delay-1">TRENDING NOW</span>
          <div className="cat-rotating reveal delay-2">
            {trendItems.map((item, i) => (
              <span key={i} className={`cat-rotating-item${i === activeIdx ? ' active' : ''}`}>
                {item}
              </span>
            ))}
          </div>
          <p className="cat-desc reveal delay-3" style={{marginTop: '20px'}}>
            كل أسبوع في صنف جديد بيجنن — تابع الترند معنا.
          </p>
          <a href="https://www.instagram.com/ashtotasy/" target="_blank" rel="noopener noreferrer"
            className="cat-cta reveal delay-4">
            شوف الترند
          </a>
        </div>
        <div className="cat-visual">
          <div className="cat-orb cat-orb-trend">
            <span className="cat-orb-emoji">🔥</span>
            <span className="cat-orb-label">الأحدث دايمًا</span>
          </div>
        </div>
      </div>

      {/* Panel 3 — البارد */}
      <div className="cat-panel cat-panel-bared" ref={baredRef}>
        <div className="cat-content">
          <span className="cat-tag reveal delay-1">DRINKS</span>
          <h2 className="cat-title reveal delay-2">كمان<br />عصير.</h2>
          <p className="cat-desc reveal delay-3">
            عصائر طازجة يومية بفواكه موسمية — باردة ومنعشة وبتشبع.
          </p>
          <a href="https://wa.me/905393752925" target="_blank" rel="noopener noreferrer"
            className="cat-cta reveal delay-4">
            {WA_ICON} اطلب هلق
          </a>
        </div>
        <div className="cat-visual">
          <div className="cat-orb cat-orb-bared">
            <span className="cat-orb-emoji">🥤</span>
            <span className="cat-orb-label">عصائر طازجة</span>
          </div>
        </div>
      </div>

    </section>
  )
}
