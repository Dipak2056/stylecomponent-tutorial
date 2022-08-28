# Getting started with Styled component

## setup

1. npm i styled-components
2. create seperate folder for styled components

## how to make simple styled components

1. in the file
2. import styled from 'styled-components'
3. export const {element} = styled.{HTML}`Your css`
4. import wherever necessary and use it.

## how to create theme

1. Define theme in App.js
2. import ThemeProvider and wrap everything
3. pass that defined theme as a props to themeProvider

## how to create Global style

1. To create Global style
2. in the component folder create Global.styled.component.js
3. in that file import createGlobalStyle from 'styled-components';
4. create and export GlobalStyleComponent as
   const GlobalStyle = createGlobalStyle`your css`
5. import at the top of rootlevel file i.e. app.js

## can we nest?

Yes, we can nest the style of the element like we can do in SASS;

## can we pass the props?

Yes, we can pass the props from the components and we can execute it in the styled component
for example `<StyledHeader bg="red"> <h1>hubble</h1> </StyledHeader>` props is passed as bg='red'
now in the styled component we can access this red value as
`export const StyledHeader = styled.header`
background-color: ${({ bg }) => bg};
padding: 40px 0;
`;`
