import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import theme from './mantineTheme.ts';
import Router from './Router.tsx';
import { localStorageColorSchemeManager } from './colorSchemeManager.ts';
import scssVariablesResolver from './scssVariablesResolver.ts';

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'color-scheme',
});

function App(): React.ReactNode {
    return (
        <BrowserRouter>
            <MantineProvider
                theme={theme}
                defaultColorScheme={'light'}
                colorSchemeManager={colorSchemeManager}
                cssVariablesResolver={scssVariablesResolver}>
                <Router />
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
