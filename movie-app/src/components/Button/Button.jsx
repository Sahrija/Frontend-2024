import styled, { css } from 'styled-components'

import theme from '../../../utils/constants/theme';


const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    cursor: pointer;


    /* variant */
    background-color: ${({variant}) => theme.colors[variant] || theme.colors.primary};
    &:hover{
        background-color: ${({variant}) => theme.hoverColors[variant] || theme.hoverColors.primary}
    };
    color: ${({variant}) => theme.foregroundColors[variant] || theme.foregroundColors.primary};

    /* full */
    width: ${(props) => props.full ? '100%' : 'fit-content'};
`;
export default Button;
