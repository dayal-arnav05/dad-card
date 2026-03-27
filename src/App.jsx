import './App.css'

const CARD = {
  /** Change this to your dad's name */
  name: 'Dad',
  /** Short line under the name */
  subtitle: 'With love',
  /** Main message — edit freely */
  message: "Happy Fathers Day Papa! Thank you for all that you've done, I cherish every memory from crawling into ancient pyramids to crawling after Alpha on our walks. I look forward to every laugh, every sweet moment, and every chance to make fun of Elon Musk. You are my inspiration, I am so lucky to have a role model like you. I love you past the last standard deviation and back! ",
  /** Footer signature */
  from: '— Arnav and Ankitt',
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
