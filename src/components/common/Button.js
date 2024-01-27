import styled from "styled-components";

const Button = ({ text, onClick, width = "100%", color, backgroundColor }) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 12px;
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 16px;
  display: block;
  cursor: pointer;
`;

export default Button;
