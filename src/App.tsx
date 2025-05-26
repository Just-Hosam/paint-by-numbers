import { NavLink } from "react-router"
import "./App.css"
import { Button } from "@mui/material"

export function App() {
  return (
    <div className="App">
      <h1>Find my Numbers</h1>
      <NavLink to="/find">
        <Button>Take Photo</Button>
      </NavLink>
    </div>
  )
}

export function Find() {
  return (
    <div className="Find">
      <h1>Find Numbers</h1>
      <p>This is the Find Numbers page.</p>
    </div>
  )
}
