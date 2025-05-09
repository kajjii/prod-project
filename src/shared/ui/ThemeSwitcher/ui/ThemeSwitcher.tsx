import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from '../../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])} 
            onClick={toggleTheme}
            >
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};