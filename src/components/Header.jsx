import { useState } from 'react'
import logo from '/vite.svg'

function Header() {

  const [now, setNow] = useState(new Date())

  setInterval(()=> setNow(new Date()), 1000)

  return (
    <header>
        <img src={logo} alt="logo" />

        <span>Time: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header