 import styled from 'styled-components'
 import {Button} from './styled/Button'


const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className='game_image'>
        <img src='/images/dices.png' alt='dice-img' />
      </div>

      <div className='content'>
        <h1>dice game</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container=styled.div`
    max-width: 1180px;
    height: 520px;
    display: flex;
    margin: 100px 0 0 160px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .content{
    h1{
      font-size: 96px;
      text-transform: uppercase;
      white-space: nowrap;
      margin-right: 0;
      color:   #FFD700;
    }
  }
`

