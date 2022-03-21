import styled from 'styled-components';
import { useThemeContext } from './component-library/ThemeProvider';
import AllRoutes from './routes';

const StyledContent = styled.div<{bg: string}>`
  position: absolute;
  height: fit-content;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  font-family: 'Varela Round', sans-serif;
  font-style: 'normal';
  font-weight: 'normal';
  background-color: ${props => props.bg};
  overflow-x: hidden;

  *, *::after, *::before {
    box-sizing: border-box;
  }

  > div {
    display: flex;
    justify-content: center;
    padding-top: 90px;
    min-height: 100vh;
  }

`;

function App() {
  const { colors } = useThemeContext();

  return (
      <>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Varela+Round&display=swap');
          </style> 
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet" />
          <StyledContent bg={colors.bg}>
            <div>
              <AllRoutes/>
            </div>
          </StyledContent>
      </>
  );
}

export default App;
