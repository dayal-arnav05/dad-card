import './App.css'

const CARD = {
  /** Change this to your dad's name */
  name: 'Dad',
  /** Short line under the name */
  subtitle: 'With love',
  /** Main message — edit freely */
  message: `Thank you for everything you do.
Your kindness and strength mean the world.

Happy Father's Day — today and every day.`,
  /** Footer signature */
  from: '— Your family',
}

function App() {
  return (
    <main className="page">
      <div className="glow" aria-hidden />
      <article className="card">
        <header className="card__header">
          <p className="card__eyebrow">For</p>
          <h1 className="card__name">{CARD.name}</h1>
          <p className="card__subtitle">{CARD.subtitle}</p>
        </header>
        <div className="card__divider" role="presentation" />
        <p className="card__message">{CARD.message}</p>
        <footer className="card__footer">
          <span className="card__from">{CARD.from}</span>
        </footer>
      </article>
    </main>
  )
}

export default App
