import React from 'react';

interface TopBarProps {
    message: string;
}

export const TopBar = ({message}: TopBarProps) => (
    <div
        className="flex items-center justify-center bg-black text-white uppercase text-center h-8 tracking-[0.05em] text-sm leading-8"
    >
        {message}
    </div>
);
 

