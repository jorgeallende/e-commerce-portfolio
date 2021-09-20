import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weigth: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: solid 1px lightgray;
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Fica ai otário, bota teu email</Description>
            <InputContainer>
                <Input placeholder="Seu email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default newsletter
