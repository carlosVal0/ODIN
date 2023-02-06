import { Route, Routes} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import './App.css'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<LoginScreen />}/>
    </Routes>
  )
}

export default App
