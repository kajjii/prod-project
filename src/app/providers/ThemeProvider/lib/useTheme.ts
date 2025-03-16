import { useContext } from "react"
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        document.body.className = newTheme;
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}
