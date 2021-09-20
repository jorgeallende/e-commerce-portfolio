import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Anuncio = () => {
    return (
        <Container>
            Calcinha de renda 50% OFF
        </Container>
    )
}

export default Anuncio
