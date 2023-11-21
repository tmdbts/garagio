import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import theme from './mantineTheme.ts';
import Router from './Router.tsx';
import { localStorageColorSchemeManager } from './colorSchemeManager.ts';

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'color-scheme',
});

function App(): React.ReactNode {
    return (
        <BrowserRouter>
            <ColorSchemeScript defaultColorScheme='dark'>
                <MantineProvider
                    theme={theme}
                    defaultColorScheme={'auto'}
                    colorSchemeManager={colorSchemeManager}>
                    <Router />
                </MantineProvider>
            </ColorSchemeScript>
        </BrowserRouter>
    );
}

export default App;
