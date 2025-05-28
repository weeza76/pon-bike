import {ROUTES} from '@/PonBike/app/routes';
import {Header, NavItem, TopBar} from '@/PonBike/app/components';
import FeatureWarningNotification from '@/PonBike/app/hooks/useFeatureWarningNotification';

export default function Home() {

    const navItems: NavItem[] = [{label: 'All bikes', route: ROUTES.ALL_BIKES}, {
        label: 'Mountain',
        route: ROUTES.MOUNTAIN
    }, {label: 'Road', route: ROUTES.ROAD}, {label: 'City', route: ROUTES.CITY}, {label: 'Sale', route: ROUTES.SALE},]

    return (
        <div>
            <FeatureWarningNotification/>
            <header>
                <TopBar message={'Free delivery on all Bikes'}/>
                <Header logo={'BIKELOGO'} navItems={navItems}/>
            </header>

            <main>
            </main>

            <footer>
            </footer>
        </div>
    );
}
