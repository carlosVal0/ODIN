import { Route, Routes} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import './App.css'
import LoginScreenV2 from './screens/LoginScreenV2'
import UserScreen from './screens/UserScreen'

function App() {

  return (
    <Routes>
      <Route exact path="/v1" element={<LoginScreen />}/>
      <Route exact path="/" element={<LoginScreenV2 />} />
      <Route exact path="/main" element={<UserScreen />} />
    </Routes>
  )
}

export default App
