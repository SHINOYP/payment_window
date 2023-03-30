import { Routes,Route } from "react-router-dom"
import Pay_Summery from "./componets/pay_Summery"
import Pay_Confirm from "./componets/pay_Confirm"
import Deskop from './pages/ds_Window'


function App() {
  
  return (
    <div className="App">
 
      <Routes>
        <Route
        path='/'
        element={<Deskop/>}
        />
         <Route
         path="/summary"
         element={<Pay_Summery/>}
         />
         <Route
        path='/confirm'
        element={<Pay_Confirm/>}
        />
       
      </Routes>
    </div>
  )
}

export default App
