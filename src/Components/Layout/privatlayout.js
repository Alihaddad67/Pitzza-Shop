// components/PrivateLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from './../Hooks/useAuth';
import { CustomNav } from '../Nav/Nav';

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


