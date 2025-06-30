
import {Routes, Route,Navigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'
import Checkout from '../Checkout/Checkout.jsx'
import Cart from '../Cart/Cart.jsx'
import Products from '../Products/Products.jsx'

import './Home.css'

function Home() {

    return(
        <>            
            <Header></Header>
                <section>
                  <p>
                        Home del proyecto
                  </p>
                  <ul className='navbar'>
                    <li>
                        <Link to="/home" >Home</Link>
                    </li>
                    <li>
                        <Link to="/home/login" >Login</Link>
                    </li>

                    <li>
                        <Link to="/home/register" >Crear Usuario</Link>
                    </li>

                    <li>
                        <Link to="/home/cart" >Carrito de Compras</Link>
                    </li>

                    <li>
                        <Link to="/home/checkout" >Pagar último producto</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <p>Está en la sección elegida</p>  
                  <Routes>
                    <Route index element={<Products/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="checkout" element={<Checkout/>} />
                    <Route path="cart" element={<Cart/>} />
                    <Route path="*" element={<Navigate to="/home" />} />
                  </Routes> 
                </section>   
            <Footer></Footer>
        </>
    )
    
}

export default Home