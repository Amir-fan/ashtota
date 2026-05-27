import { useEffect, useRef } from 'react'

const branches = [
  {
    city: 'حلب',
    desc: 'الموغامبو، مقابل جامع الروضة',
    status: 'مفتوح الآن',
    open: true,
  },
  { city: 'دمشق',     desc: 'قريباً في العاصمة',           status: 'قريباً', open: false },
  { city: 'اللاذقية', desc: 'الساحل السوري — قريباً',       status: 'قريباً', open: false },
  { city: 'طرطوس',    desc: 'فرع جديد تحت التجهيز',         status: 'قريباً', open: false },
  { city: 'إدلب',     desc: 'قادمون إليكم قريباً',          status: 'قريباً', open: false },
]

export default function Locations() {
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
    <section className="branches" id="branches" ref={ref}>
      <div className="wrap branches__grid">

        <div className="branches__left">
          <div className="sr">
            <span className="section-label">أين نحنا</span>
            <h2 className="section-title">الفروع</h2>
          </div>

          <div className="branches__list">
            {branches.map((b, i) => (
              <div
                key={i}
                className="branch-row sr"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="branch-row__num">0{i + 1}</span>
                <div className="branch-row__body">
                  <div className="branch-row__city">{b.city}</div>
                  <div className="branch-row__desc">{b.desc}</div>
                </div>
                <span className={`branch-row__status ${b.open ? 'branch-row__status--open' : 'branch-row__status--soon'}`}>
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="branches__visual sr d2">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
            alt="فرع أشطوطة"
            loading="lazy"
          />
          <div className="branches__visual-tag">📍 حلب الموغامبو</div>
        </div>

      </div>
    </section>
  )
}
