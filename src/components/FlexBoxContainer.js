import React from 'react';
import styled from 'styled-components';

const FlexboxContainer = styled.div`
  display: ${({ displayFlex }) => displayFlex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-top: ${({ borderTop }) => borderTop};
  box-shadow: ${({ boxShadow }) => boxShadow};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;
const FlexBoxContainer = ({
  children,
  bgColor,
  className,
  margin,
  maxWidth,
  width,
  minWidth,
  height,
  displayFlex,
  flexDirection,
  flexWrap,
  flexFlow,
  justifyContent,
  alignItems,
  alignContent,
  border,
  borderColor,
  borderRadius,
  borderRight,
  borderBottom,
  borderTop,
  padding,
  boxShadow,
  textDecoration,
  onClick
}) => {
  const sharedProps = {
    className,
    bgColor,
    maxWidth,
    width,
    minWidth,
    height,
    margin,
    displayFlex,
    flexDirection,
    flexWrap,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    border,
    borderColor,
    borderRadius,
    borderRight,
    borderBottom,
    borderTop,
    padding,
    boxShadow,
    textDecoration,
    onClick
  };

  return (
    <FlexboxContainer {...sharedProps}>
      {children}
    </FlexboxContainer>
  );
};

export default FlexBoxContainer;
