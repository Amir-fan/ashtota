export default function Loader({ done }) {
  return (
    <div className={`loader${done ? ' done' : ''}`}>
      <div className="loader-logo">
        <span className="loader-ar">أشطوطة</span>
        <span className="loader-en">ASHTOTA</span>
        <div className="loader-dot" />
      </div>
    </div>
  )
}
