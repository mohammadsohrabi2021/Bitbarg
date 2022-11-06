import React from 'react';
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;