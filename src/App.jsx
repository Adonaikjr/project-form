import { Info } from "./components/Info"
import { Header } from "./components/Header"
import {Container} from './styleApp'
function App() {

  return (
    <Container>
      <form>
      <fieldset>
      <Header/>
      <Info title='Informações pessoais'/>
      <Info name='Nome' area={<input type='text'/>}/>
      <Info name='Sobrenome' area={<input type ='text'/>}/>
      <Info name='E-mail' areawidth={<input type='email'/> }/>
      <Info name='Senha'  areawidth={<input type='password'/> }/>
      </fieldset>
      </form>
    </Container>
  )
}

export default App
