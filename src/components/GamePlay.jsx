 import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import {Button} from './styled/Button'
import {OutlineButton} from './styled/Button'
import Rules from './Rules'


const GamePlay = () => {

  const[error,setError]=useState();

  const [selected,setSelected]=useState();

  const [currentState,setCurrentState]=useState(1);

  const [score,setScore]=useState(0);

  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min)
    };

   const RollDices=()=>{
      if(!selected){
        setError("You have not selected any number")
        return;
      }
      
      const random=generateRandomNumber(1,7)
      setCurrentState(random)

      setScore(prev=>{
        if (selected ===random){
          return prev + random
        }else{
          return prev-2
        }
      });
      setSelected("")
    };

    const resetScore=()=>{
      setScore(0)
      setCurrentState(1)
    };

    const rules=()=>{
      setShowRules((prev)=>!prev)
    };

  return (
    <MainContainer>
        <TopSection>
            <TotalScore score={score} />
            <NumberSelector setError={setError} error={error} selected={selected}
            setSelected={setSelected}/>
        </TopSection>
        <RollDice currentState={currentState} RollDice={RollDices} />
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={rules}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
       { showRules && <Rules /> } 
        
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
  
  .btns{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-top: 40px;
    margin-right: 100px;
  }
`

const TopSection=styled.div`
    margin: 50px auto;
    max-width: 1180px;
    display: flex;
    justify-content: space-between;
`
