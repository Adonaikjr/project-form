import { Container, Content } from "./style";

export function Info({title, name, area, areawidth}){
    return(
        <Container>
            <h3>{title}</h3>
            <label>{name}</label>
            {area}
            <Content>
                {areawidth}
            </Content>
        </Container>
    )
};
