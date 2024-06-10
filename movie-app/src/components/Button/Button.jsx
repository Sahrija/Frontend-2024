import styled from 'styled-components'

const colors = {
    primary: '#4361ee',
    secondary: '#b5179e',
    tertiary: '#c9c9c9'
}

const colorsHover = {
    primary: '#2e4cd4',
    secondary: '#940e80',
    tertiary: '#c9c9c9'
}

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    cursor: pointer;


    /* variant */
    background-color: ${function (props) {
        return colors[props.variant]
    }};
    &:hover{
        background-color: ${(props) => colorsHover[props.variant]}
    };

    /* full */
    width: ${(props) => props.full ? '100%' : 'fit-content'};
`;

export default Button;
