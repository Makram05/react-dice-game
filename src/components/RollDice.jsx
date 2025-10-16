import styled from "styled-components";

const RollDice = ({ currentState, RollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={RollDice}>
        <img width={150} src={`/images/dice/dice_${currentState}.png`} alt={`dice_${currentState}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 10px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: #c9a63d;
  }
`;
