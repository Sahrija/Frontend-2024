import { css } from "styled-components";

const theme = {
    colors: {
        primary: '#4361ee',
        secondary: '#b5179e',
        tertiary: '#c9c9c9'
    },
    hoverColors: {
        primary: '#2e4cd4',
        secondary: '#940e80',
        tertiary: '#c9c9c9'
    },
    foregroundColors: {
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#000000'
    },
    size: {
        sm: css`
            font-size: 0.8rem;
            padding: 0.2rem 0.5rem;
            `,
        md: css`
            font-size: 1rem;
            padding: 0.5rem 1rem;
            `,
        lg: css`
            font-size: 1.3rem;
            padding: 0.5rem 1rem;
            `,
    }
}

export default theme;
