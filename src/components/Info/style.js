import styled from 'styled-components';

export const Container = styled.div`
input{
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY };
    border: none;
    border-radius: 12px;
    height: 56px;
    width: 320px;
}
`;

export const Content = styled.div`
input{
   width: 622px;
}
`
