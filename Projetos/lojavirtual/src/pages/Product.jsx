import styled from "styled-components"
import Navbar from "../components/Navbar"
import Anuncio from "../components/Anuncio"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weigth: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`
const FilterSizeOption = styled.option`

`
const AddCont = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const AmountCont = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Anuncio />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Calça Jeans Básica</Title>
                    <Desc>Bla bla bla que roupa boa uau básica igual a você</Desc>
                    <Price>R$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cor</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>PP</FilterSizeOption>
                                <FilterSizeOption>P</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>G</FilterSizeOption>
                                <FilterSizeOption>GG</FilterSizeOption>
                                <FilterSizeOption>XG</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddCont>
                        <AmountCont>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountCont>
                        <Button>Adicionar ao carrinho</Button>
                    </AddCont>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
