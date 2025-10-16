import styled from "styled-components"

const NumberSelector = ({setError,error,selected,setSelected}) => {
    let  arrNumber=[1,2,3,4,5,6]; 

    const NumberHandler=(value)=>{
        setSelected(value)
        setError("")
    }

  return (
    <SelectContainer>
        <diV><p className="error">{error}</p></diV>
        
        <div className="numbers">
            { arrNumber.map( (value,i) =>( 
                <Box isSelected={value===selected} key={i} 
                onClick={()=>NumberHandler(value)}> {value} </Box>) ) 
            }
        </div>
       
      <p>Select Number</p>
    </SelectContainer>
  )
}

export default NumberSelector

const SelectContainer=styled.div`
   
   display: flex;
   flex-direction: column;
   align-items: end;
   
   max-width: 550px;

    .numbers{
        display: flex;
        gap:24px;
    }

    p{
        line-height: 50px;
        color:white;
        font-size: 24px;
        font-weight: 600;
        right: 0px;
    }
    .error{
        font-size: 24px;
        color: red;
    }
`

const Box=styled.div`
    display: flex;
    gap:24px;
    width: 72px;
    height: 72px;
    border: 1px solid #FFD700;
    color: white;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected?"#FFD700":"none"};
`