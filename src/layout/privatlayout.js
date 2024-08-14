// components/PrivateLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { CustomNav } from '../components/Nav';

export const PrivateLayout = () => {
    // const { logout } = useAuth();

    return (
        <div>  
            <CustomNav/>
            <main>
                <Outlet />
            </main>
        </div>
    );
};


