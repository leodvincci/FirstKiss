import '../styles/App.css'
import RouteConfig from "../routes/RouteConfig.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <RouteConfig/>
      </BrowserRouter>

  )
}

export default App
