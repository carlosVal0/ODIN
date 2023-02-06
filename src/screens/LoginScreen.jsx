import '../styles/LogicScreen.css'

const LoginScreen = () => {
    return (
        <div className="login-main-container">
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="form-container">
                <form action="/">
                    <h3>ODIN</h3>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" placeholder="correo@email.com" id="username" />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="********" id="password"></input>

                    <button>
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;