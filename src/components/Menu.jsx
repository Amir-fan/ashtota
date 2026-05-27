const products = [
  {
    name: 'ئشطوطة',
    desc: 'غرقانة بالقشطة البلدية والمكسرات',
    price: '50,000',
    badge: 'الأكثر طلباً',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'ترند كيك',
    desc: 'كيكة شوكولاتة غنية بلمسة أشطوطة',
    price: '60,000',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'كشري الحلو',
    desc: 'مكس نكهات سورية بطريقة بتخطف',
    price: '50,000',
    badge: 'جديد',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'عصير طازج',
    desc: 'فواكه طبيعية فريش 100%',
    price: '25,000',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80',
  },
]

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="wrap">
        <div className="menu-head">
          <span className="section-label">ما نقدمه</span>
          <h2 className="section-title">القائمة</h2>
        </div>

        <div className="menu-cards">
          {products.map((item, i) => (
            <div className="menu-card" key={i}>
              <div className="menu-card__img">
                <img src={item.img} alt={item.name} loading="lazy" />
                {item.badge && <span className="menu-card__badge">{item.badge}</span>}
              </div>
              <div className="menu-card__body">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__desc">{item.desc}</p>
                <div className="menu-card__footer">
                  <span className="menu-card__price">{item.price} ل.س</span>
                  <a
                    href="https://wa.me/905393752925"
                    target="_blank" rel="noopener noreferrer"
                    className="menu-card__cta"
                  >
                    اطلب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
