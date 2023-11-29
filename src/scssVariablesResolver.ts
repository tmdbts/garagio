import { CSSVariablesResolver, MantineTheme } from '@mantine/core';

const resolver: CSSVariablesResolver = (theme: MantineTheme) => ({
    variables: {
        '--mantine-color-secondary': theme.colors.secondary[5],
        '--mantine-color-primary': theme.colors.primary[2],
    },
    light: {},
    dark: {},
});

export default resolver;
