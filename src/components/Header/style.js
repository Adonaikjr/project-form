import styled from 'styled-components';

export const Container = styled.header`
  width: 1440px;
  height: 436px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  color: ${({theme}) => theme.COLORS.GRAY};
h1{
    margin-left: 345px;
    padding-top: 140px;
    padding-bottom: 18px;
    font-family: Staatliches;
font-size: 48px;
font-weight: 400;
line-height: 60px;
letter-spacing: 0em;
text-align: left;

}
p{
    width:417px ;
    margin-left: 345px;
    height: 46px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

}

`;
