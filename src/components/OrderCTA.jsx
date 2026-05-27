import { useEffect, useRef } from 'react'

export default function OrderCTA() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <h2 className="section-title" style={{ color: 'var(--surface)' }}>هل تشتهي شيئاً الآن؟</h2>
          <p className="section-subtitle">
            لا تنتظر كثيراً! جميع أصنافنا متوفرة للطلب الفوري. تواصل معنا وسنخبرك بكل ما هو متاح وطازج لليوم.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/905393752925" target="_blank" rel="noopener noreferrer" className="btn-primary">
              تواصل عبر واتساب للطلب
            </a>
            <a href="tel:+963933702626" className="btn-secondary" style={{ border: 'none' }}>
              أو اتصل بنا مباشرة
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
