import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// StrictMode intentionally omitted: its double-mount reverts GSAP/ScrollTrigger
// tweens on cleanup, leaving scroll reveals stuck mid-animation.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
