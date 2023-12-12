import { createTheme, MantineColorsTuple } from '@mantine/core';

const primary: MantineColorsTuple = [
    '#f4fce7',
    '#e9f6d6',
    '#d3edae',
    '#bae381',
    '#a6db5d',
    '#99d545',
    '#92d338',
    '#7eba29',
    '#6fa520',
    '#5c8f12',
];

const secondary: MantineColorsTuple = [
    '#ffeaea',
    '#fdd6d6',
    '#f0acad',
    '#e57e81',
    '#dc585b',
    '#d74043',
    '#d63336',
    '#be2429',
    '#aa1d23',
    '#95121c',
];

const darkGreen: MantineColorsTuple = [
    '#ebfff7',
    '#d7fcee',
    '#a9fbdc',
    '#79fac8',
    '#56f9b8',
    '#46f8ad',
    '#3cf8a7',
    '#30de91',
    '#24c580',
    '#03aa6d',
];

const beige: MantineColorsTuple = [
    '#fdf4ec',
    '#f0e8de',
    '#dfd0bd',
    '#cdb598',
    '#bfa079',
    '#b59264',
    '#b18a59',
    '#9c7749',
    '#8b6a3e',
    '#7a5a31',
];
const gray: MantineColorsTuple = [
    '#fff2f5',
    '#ece6e7',
    '#cfcdcd',
    '#b2b2b2',
    '#9a9a9a',
    '#8b8b8b',
    '#848484',
    '#737171',
    '#686465',
    '#5f5457',
];

const theme = createTheme({
    primaryColor: 'primary',
    colors: {
        primary,
        secondary,
        gray,
        beige,
        darkGreen,
    },
});

export default theme;
