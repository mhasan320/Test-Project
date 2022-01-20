import React from 'react';
import { Header } from './Header';

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="w-full px-4 sm:px-0 sm:w-3/5 m-auto pt-6">
                {children}
            </div>
        </div>
    )
}
