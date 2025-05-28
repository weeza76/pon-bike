import React from 'react'
import Link from 'next/link';
import {ROUTES} from '@/PonBike/app/routes';

const AllBikes = () => (
    <div className="flex items-center justify-center min-h-screen">
        <ul className="flex flex-col items-center gap-4 list-none p-0 m-0">
            {[
                {route: ROUTES.BIKE_CITY, label: 'City'},
                {route: ROUTES.BIKE_ROAD, label: 'Road'},
                {route: ROUTES.BIKE_MOUNTAIN, label: 'Mountain'}
            ].map(({route, label}) => (
                <li key={label}>
                    <Link
                        href={route}
                        className="inline-block px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium shadow-sm transition"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)


export default AllBikes
