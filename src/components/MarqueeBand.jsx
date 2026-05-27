const items = [
  'أشطوطة', 'ASHTOTA', 'كبير الحلو وصل', 'حلو بجنن',
  'أشطوطة', 'ASHTOTA', 'كبير الحلو وصل', 'حلو بجنن',
]

export default function MarqueeBand() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
