import { Route, Routes} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import './App.css'
import LoginScreenV2 from './screens/LoginScreenV2'

function App() {

  return (
    <Routes>
      <Route exact path="/v1" element={<LoginScreen />}/>
      <Route exact path="/" element={<LoginScreenV2 />} />
    </Routes>
  )
}

export default App
