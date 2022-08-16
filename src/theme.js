import { createTheme } from '@mui/material';

const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0D162F',
            
        },
        secondary: {
            main: '#16213E',
          
        },
        third: {
            main: '#091127',
        },
        info: {
            main: '#E94560'
        }
    },
    
});

export default customTheme;