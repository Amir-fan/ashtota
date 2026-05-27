export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">

          <div className="footer__brand">
            <div className="footer__logo">أشطوطة</div>
            <p>
              حلويات ومشروبات سورية بطابع عصري. من حلب للعالم.
            </p>
          </div>

          <div className="footer__col">
            <h5>الموقع</h5>
            <a href="#menu">القائمة</a>
            <a href="#about">عن أشطوطة</a>
            <a href="#branches">الفروع</a>
          </div>

          <div className="footer__col">
            <h5>تواصل</h5>
            <a href="https://wa.me/905393752925" target="_blank" rel="noopener noreferrer">واتساب</a>
            <a href="tel:+963933702626">اتصل بنا</a>
            <a href="https://instagram.com/ashtotasy" target="_blank" rel="noopener noreferrer">إنستغرام</a>
          </div>

          <div className="footer__col">
            <h5>الفرع الرئيسي</h5>
            <a href="#">حلب، الموغامبو</a>
            <a href="#">مقابل جامع الروضة</a>
          </div>

        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} أشطوطة. جميع الحقوق محفوظة.</span>
          <span>نصنع الترند قبل ما يكون ترند</span>
        </div>
      </div>
    </footer>
  )
}
