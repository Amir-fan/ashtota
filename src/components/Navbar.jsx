import { useState, useEffect } from 'react'

export default function Navbar() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`nav ${stuck ? 'stuck' : ''}`}>
      <div className="nav__inner wrap">
        <a href="#" className="nav__logo">أشطوطة</a>

        <div className="nav__links">
          <a href="#menu"      className="nav__link">القائمة</a>
          <a href="#about"     className="nav__link">عن أشطوطة</a>
          <a href="#branches"  className="nav__link">الفروع</a>
          <a
            href="https://wa.me/905393752925"
            target="_blank" rel="noopener noreferrer"
            className="nav__cta"
          >
            واتساب
          </a>
        </div>

        {/* Mobile — show only order button */}
        <a
          href="https://wa.me/905393752925"
          target="_blank" rel="noopener noreferrer"
          className="nav__mobile-cta"
        >
          واتساب
        </a>
      </div>
    </nav>
  )
}
