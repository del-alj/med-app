import styled from "styled-components";


export const Container = styled.div`
text-align: center;
width: 100%;
height: 100%;
display: flex;
font-family: "Electrolize", sans-serif;
margin: 0;
min-height: 100vh;
h1 {
  font-size: 44px;
}

@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const Block = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
justify-content: ${(props) =>
    props.justifyContent ? `${props.justifyContent}` : "none"};
width: 50%;
@media screen and (max-width: 768px) {
  width: 100%;
  justify-content: center;
  align-items: center;
}
`;

export const Img = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image:  ${(props) => props.picture ? `url(${props?.picture})` : "none"};
`;

export const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 300px;
  text-align: justify;
  margin: 10px 0px;
  > input {
    margin-top: 5px;
    width:300px;
    padding: 10px 10px;
    border: 1px solid grey;
    border-radius: 3px;
  }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonDiv = styled.button`
  width: 300px;
  background-color: black;
  color: white;
  padding: 10px 0px;
  border-radius: 3px;
  border: transparent;
`;

export const FlexImages = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-self: center;
  max-width: 1440px;
`;


export const Image = styled.img`
  width:300px;
  height:400px;
  margin:10px;
  transition: all 1s;
  overflow-x:auto;
  overscroll-behavior-x:contain;
  scroll-snap-type:x mandatory;

   :hover{
    /* transform:scale(1.1); */
  }
`;

export const LikeDiv = styled.div`
  /* display: flex;  */
  justify-content: right; 
  padding: 10px;
  position: absolute;
  top: 10px; 
  right: 10px;

  /* display: block; */
  :hover{
    transform:scale(1.1);
    display: block;

  }
`

export const ButtonLike = styled.button`
  border: none;
  border-radius: 5px;
  ${(props) => !props?.like && `background: #f15151;`}
  svg {
  padding: 5px 3px 3px 3px;
  fill: white;
  ${(props) => props?.like && `fill: black;`}
  }
`;