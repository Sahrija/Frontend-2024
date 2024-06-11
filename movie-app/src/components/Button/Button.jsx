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
`;

export default Button;
