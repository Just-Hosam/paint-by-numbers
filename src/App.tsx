import { NavLink } from "react-router"
import "./App.css"
import { Button } from "@mui/material"

function App() {
  return (
    <div className="App">
      <h1>Find my Numbers</h1>
      <NavLink to="/find">
        <Button>Take Photo</Button>
      </NavLink>
    </div>
  )
}

export default App
