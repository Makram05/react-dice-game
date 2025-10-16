import styled from "styled-components";


const TotalScore = ({score}) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  )
}

export default TotalScore;

const Container=styled.div`
      color: white;
      max-width: 145px;
    

      h1{
        font-size: 100px;
        line-height: 100px;
      }

      p{
        font-size: 24px;
        font-weight: 600;
      }
`


