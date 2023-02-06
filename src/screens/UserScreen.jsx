import { useState } from 'react';
import NavigationBottomBar from '../components/NavigationBottomBar';
import SearchBox from '../components/SearchBox';
import StatsuBar from '../components/StatsuBar';
import '../styles/UserScreen.css'

const UserScreen = () => {

    return (
        <div className="user-screen-container">
            <StatsuBar />
            <SearchBox />
            <NavigationBottomBar/>
            
        </div>
    );
}

export default UserScreen;