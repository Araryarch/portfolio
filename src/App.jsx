import { useState, useEffect } from "react"
import Load from "./pages/Load"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <Load /> : ""}</div>
}

export default App
