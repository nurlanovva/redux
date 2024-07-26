import { Routes, Route } from "react-router-dom"
import Header from "./shared/Header"
import HomePage from "./pages/Home"
import CartPage from "./pages/Cart/view/CartPage"
import { ToastContainer } from "react-toastify"


function App() {


  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cart" element={<CartPage />}/>
      </Routes>
    </>
  )
}

export default App
