import { useEffect, useRef } from 'react'

export default function FinalCta() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.sr')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.2 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="final-cta" ref={ref}>
      <div className="wrap final-cta__inner">
        <h2 className="final-cta__title sr">جاهز للحلو؟</h2>
        <p className="final-cta__sub sr d1">
          اطلب من أقرب فرع وخلي أشطوطة توصل لعندك.
        </p>
        <div className="final-cta__actions sr d2">
          <a
            href="https://wa.me/905393752925"
            target="_blank" rel="noopener noreferrer"
            className="btn-white"
          >
            اطلب عبر واتساب
          </a>
          <a
            href="tel:+963933702626"
            className="btn-outline-white"
          >
            اتصال
          </a>
        </div>
      </div>
    </section>
  )
}
