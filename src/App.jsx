import './App.css'

function Moon() {
  return (
    <div className="moon-container">
      <div className="stars">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="star" style={{
            top: `${(i * 37 + 13) % 100}%`,
            left: `${(i * 53 + 7) % 100}%`,
            animationDelay: `${(i * 0.17) % 4}s`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
          }} />
        ))}
      </div>
      <div className="moon">
        <div className="moon-sheen" />
        <div className="moon-crater crater-1" />
        <div className="moon-crater crater-2" />
        <div className="moon-crater crater-3" />
      </div>
      <div className="moon-halo" />
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="bg-radial" />
      <main className="content">
        <Moon />
        <div className="text-block">
          <p className="eyebrow">MoonBet</p>
          <h1 className="heading">Soon</h1>
          <p className="description">
            {/* ✏️ Edit this description */}
            Your Yes or No will determine the future.
          </p>
        </div>
      </main>
    </div>
  )
}
