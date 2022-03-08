import ThemeProvider from './component-library/ThemeProvider';
import styled from 'styled-components';
import UserProvider from './component-library/UserProvider';
import AllRoutes from './routes';
import { Route, Routes } from 'react-router-dom';
import DefaultNavbar from './component-library/navigation/components/DefaultNavbar';


const StyledApp = styled.div`
  position: static;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  font-family: 'Varela Round', sans-serif;
  font-style: 'normal';
  font-weight: 'normal';

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {

  return (
      <>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Varela+Round&display=swap');
          </style> 
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet" />
        </head>
        <body>
          <StyledApp>
              <ThemeProvider>
                <UserProvider>
                  <AllRoutes/>
                </UserProvider>
              </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
