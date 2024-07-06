import styled, { css } from 'styled-components'

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    cursor: pointer;


    /* variant */
    background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors.primary};
    &:hover{
        background-color: ${(props) => props.theme.hoverColors[props.variant] || props.theme.hoverColors.primary}
    };
    color: ${(props) => props.theme.foregroundColors[props.variant] || props.theme.foregroundColors.primary};

    /* full */
    width: ${(props) => props.full ? '100%' : 'fit-content'};

    /* size */
    ${(props) => props.theme.size[props.size] || props.theme.size.md}

    /* disabled */
    ${(props) => props.disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}

    /* loading */
    ${(props) => props.loading && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}

    /* icon */
    ${(props) => props.icon && css`
        padding-right: 1rem;
    `}

    /* icon position */
    ${(props) => props.iconPosition === 'left' && css`
        padding-left: 1rem;
    `}

    /* icon position */
`;

export default Button;
