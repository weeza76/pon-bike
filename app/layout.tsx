import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {FeatureWarningNotification, Header, NavItem, TopBar} from '@/PonBike/app/libs/components';
import {Breadcrumb} from '@/PonBike/app/libs/components/Breadcrumb/Breadcrumb';
import {ROUTES} from '@/PonBike/app/routes';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'PON Bike | Assessment by Werner Zagorski',
    description: 'I know how the rabbit is running 🐇',
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navItems: NavItem[] = [
        {label: 'All bikes', route: ROUTES.ALL_BIKES},
        {label: 'Mountain', route: ROUTES.BIKE_MOUNTAIN},
        {label: 'Road', route: ROUTES.BIKE_ROAD},
        {label: 'City', route: ROUTES.BIKE_CITY},
        {label: 'Sale', route: ROUTES.SALE},
    ]
    
    return (
        <html lang="en">
        <body className={`bg-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
            <FeatureWarningNotification/>
            <header>
                <TopBar message={'Free delivery on all Bikes'}/>
                <Header logo={'BIKELOGO'} navItems={navItems}/>
            </header>
            <nav aria-label="Breadcrumb">
                <Breadcrumb/>
            </nav>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </div>

        </body>
        </html>
    );
}
