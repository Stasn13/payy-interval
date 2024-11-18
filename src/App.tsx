import { useState } from 'react'
import './App.css'
import Button from './ui/Button'
import Input from './ui/Input'
import AutoIncrement from './components/AutoIncrement'
import LogoIcon from './assets/icons/logo'

function App() {
  const [count, setCount] = useState(0);
  const [incrementStep, setIncrementStep] = useState("1");


  const setIncrement = () => {
    setCount(value => value + Number(incrementStep))
  }

  const setDecrement = () => {
    setCount((value) => {
      const newValue = value - Number(incrementStep)
      if (newValue >= 0) {
        return newValue
      }

      return 0
    })
  }

  const autoIncrement = () => {
    setCount(value => value + Number(incrementStep))
  }

  return (
    <main>
      <div className="logo-wrapper">
        <LogoIcon />
      </div>
      <div className="count-number">
        {count}
      </div>
      <div className="controls-wrapper">
        <Button text="Increment" onClick={setIncrement} />
        <Button text="Decrement" onClick={setDecrement} />
        <Input onChange={setIncrementStep} value={incrementStep} />
      </div>
      <AutoIncrement tickCallback={autoIncrement} />
    </main>
  )
}

export default App
