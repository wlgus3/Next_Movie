import { Black_And_White_Picture } from "next/font/google";

export default function RatingCircle({rating}) {
  const circleStyle = {
    border: '1px #198e1d solid',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundImage: `conic-gradient(
      #c8ffbd 0deg, 
      #04ff0c ${rating * 36}deg, 
      #ffffff ${rating * 36}deg, 
      #ffffff 360deg
    )`,
    opacity: '0.7',
    margin: '0 3px',
    fontSize : '9px',
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center'
  };
  
  return (
    <div style={circleStyle}>
      <div>{rating}</div>
    </div>
  )
}
