import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import s from './Sidebar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
            <Button 
                onClick={onToggle}
                className={s.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                >
                    {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.main}
                    className={s.item}
                    >
                    <MainIcon className={s.icon} />
                    <span className={s.link}>
                        Главная
                    </span>
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.about}
                    className={s.item}
                    >
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>
                        О сайте
                    </span>
                </AppLink>
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    short={collapsed} 
                    className={s.lang} />
            </div>
        </div>
    );
};