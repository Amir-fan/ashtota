import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.sr')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="story" id="about" ref={ref}>
      <div className="wrap story__grid">

        <div className="story__img sr">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop"
            alt="في مطبخ أشطوطة"
            loading="lazy"
          />
        </div>

        <div className="story__text sr d1">
          <span className="story__label">قصتنا</span>
          <h2 className="story__title">مين نحنا؟</h2>
          <p className="story__body">
            باختصار — نحنا جماعة منحب الحلو من قلبنا. أخدنا أصول الحلويات الحلبية والسورية اللي كبرنا عليها، وقدمناها بطريقة خفيفة وقريبة وبتفتح النفس.
          </p>
          <p className="story__body">
            من الأشطوطة الغرقانة بالقشطة البلدية، للكشري الحلو اللي بياخدك لعالم تاني — كل طبق عنا هو قصة شغف.
          </p>
          <span className="story__slogan">نصنع الترند قبل ما يكون ترند</span>
        </div>

      </div>
    </section>
  )
}
