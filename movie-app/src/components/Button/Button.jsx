import styled from 'styled-components'

const style = {
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
    foregroundColor: {
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#000000'
    }
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
        return style.colors[props.variant]
    }};
    &:hover{
        background-color: ${(props) => style.hoverColors[props.variant]}
    };

    /* full */
    width: ${(props) => props.full ? '100%' : 'fit-content'};
`;
export default Button;
