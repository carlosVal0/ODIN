import { Link } from 'react-router-dom'
import '../styles/LoginScreenV2.css'

const LoginScreenV2 = () => {
    return (
        <div className='login-container'>
            <div className="login-box">   
                <h2>ODIN</h2>
                <form>
                    <div className="user-box">
                    <label>Usuario</label>
                    <input required="" name="" type="text" placeholder='correo@email.com'/>
                    </div>
                    <div className="user-box">
                    <label>Contraseña</label>
                    <input required="" name="" type="password" placeholder='*********'/>
                    </div><center>
                    <Link to="/main"> Iniciar sesión</Link></center>
                </form>
            </div>

            <div className="social-media">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-whatsapp"></ion-icon>
            </div>

        </div>
    );
}

export default LoginScreenV2;