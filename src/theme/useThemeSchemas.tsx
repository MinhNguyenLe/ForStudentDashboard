import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const useThemeSchemas = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeSchemas must be used within a ThemeContext');
    }

    return context;
};

export default useThemeSchemas;
