import { useEffect, useRef } from 'react'

export default function Manifesto() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.2 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="manifesto" ref={ref}>
      <div className="container manifesto-content reveal">
        <h2 className="manifesto-quote">
          "نحن لا نقدم مجرد حلويات، نحن نصنع لحظات من السعادة تُشارك مع من تحب. من حلب، بكل شغف."
        </h2>
        <span className="manifesto-author">أشطوطة · ASHTOTA</span>
      </div>
    </section>
  )
}
