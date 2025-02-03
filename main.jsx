import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BmiCalculator } from './BmiCalculator.jsx'
import './BmiCalculator.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BmiCalculator/>
  </StrictMode>,
)
