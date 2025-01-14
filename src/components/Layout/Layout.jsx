import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

import styles from './Layout.module.css';

const Layout = () => {
    return <div className={styles}>
        <Header />
        <Suspense fallback='Loading'>
            <Outlet/>
        </Suspense>
    </div>;
}

export default Layout;