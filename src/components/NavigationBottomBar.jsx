import '../styles/NavigationBottomBar.css'

const NavigationBottomBar = () => {
    return (
        <div className="navigation-bottom-container">
            <span className='icon'>
                <ion-icon name="file-tray-full-outline"></ion-icon>
                <p> Repositorio </p>
            </span>
            <span className="icon">
                <ion-icon name="search-circle-outline"></ion-icon>
                <p>Búsqueda</p>
            </span>
            <span className="icon">
                <ion-icon name="bookmarks-outline"></ion-icon>
                <p>Marcadores</p>
            </span>
        </div>
    );
}

export default NavigationBottomBar;