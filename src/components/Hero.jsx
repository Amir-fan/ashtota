import { useEffect, useRef } from 'react'
import heroImg from '../assets/heroimage.png'

// All 5 cards — verified working Unsplash food images, hero image is center (index 2)
const cards = [
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80', // dessert
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', // sweet
  heroImg,  // center — brand hero image
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80', // cake
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80', // dessert
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.sr')
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.05 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="hero" id="hero" ref={ref}>
      {/* Background: real product image, very light overlay just for text */}
      <div className="hero__bg">
        <img src={heroImg} alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Decorative brand accent dots */}
      <div className="hero__accent-dot hero__accent-dot--1" />
      <div className="hero__accent-dot hero__accent-dot--2" />

      <div className="wrap hero__wrap">
        {/* Centered copy */}
        <div className="hero__copy">
          <span className="hero__eyebrow sr">🍰 حلب · الموغامبو</span>
          <h1 className="hero__title sr d1">كبير الحلو<br />وصل</h1>
          <p className="hero__sub sr d2">
            حلويات ومشروبات بطابع سوري قريب من القلب — من الكشتة والكيك للعصائر الطازجة.
          </p>
          <div className="hero__actions sr d3">
            <a
              href="https://wa.me/905393752925"
              target="_blank" rel="noopener noreferrer"
              className="hero__btn-main"
            >
              واتساب
            </a>
            <a
              href="tel:+963933702626"
              className="hero__btn-ghost"
            >
              اتصال
            </a>
          </div>
        </div>

        {/* 5 perfectly even cards */}
        <div className="hero__cards sr d4">
          {cards.map((src, i) => (
            <div key={i} className={`hero__card hero__card--${i}`}>
              <img src={src} alt="أشطوطة" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
