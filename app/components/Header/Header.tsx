'use client'

import React from 'react';
import {useNotificationStore} from '@/PonBike/app/stores/notificationStore';

export interface NavItem {
    label: string;
    route: string;
}

interface HeaderProps {
    logo: React.ReactNode;
    navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = ({
    logo,
    navItems,
}) => {


    const {showFeatureWarnungNotification} = useNotificationStore()

    const handleMenuButtonClick = () => {
        showFeatureWarnungNotification('Feature still under development')
    }

    return (
        <header className="bg-white h-16 px-4 flex items-center justify-between max-w-6xl mx-auto">
            <button aria-label="Menu" onClick={handleMenuButtonClick} className="text-gray-700 md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
            </button>

            <div className="flex-1 flex justify-center md:flex-none md:justify-start">{logo}</div>

            <nav className="hidden md:flex space-x-6 font-medium">
                {navItems.map(({label, route}) => (
                    <a key={label} href={route} className="hover:text-gray-700 transition-colors duration-200">
                        {label}
                    </a>
                ))}
            </nav>

            <div className="flex items-center space-x-4">
                <button
                    aria-label="Account"
                    onClick={handleMenuButtonClick}
                    className="hidden md:block text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                    👤
                </button>
                <button
                    aria-label="Warenkorb"
                    onClick={handleMenuButtonClick}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                    🛒
                </button>
                <button
                    aria-label="Menü"
                    onClick={handleMenuButtonClick}
                    className="hidden md:block text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                    ☰
                </button>
            </div>
        </header>
    )
}