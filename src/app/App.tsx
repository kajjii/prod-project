import { Suspense } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import './styles/index.scss'
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const App = () => {
    const {theme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;