import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './helpers/constants/ROUTES.js';
import Layout from './components/Layout/Layout.jsx';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TEACHERS} element={<TeachersPage />} />
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
