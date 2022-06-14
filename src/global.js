import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        margin: 0 auto;
        padding: 0 auto;
        background: ${({theme}) => theme.COLORS.GRAY};
        max-width: 1440px;
        h3, h4{
            font-family: Staatliches;
font-weight: 400;
line-height: 34px;
letter-spacing: 0em;
text-align: left;

        }
        label{
            font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

        }
        span{
            font-family: Poppins;
font-size: 12px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

        }
        
    }
`