import ThemeProvider from './component-library/ThemeProvider';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import TeacherNavbar from './component-library/navigation/components/TeacherNavbar';
import { UserMode } from './component-library/navigation/base-components/NavUserStatus';

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

  const userStatus = {
    username: "Leonhard Euler",
    school: "University of Venice",
    logoutUrl: "/Logout",
    profileUrl: "/Profile",
    dashboardUrl: "/",
    userMode: UserMode.TEACHER,
    authorizedUserModes: [UserMode.PARENT, UserMode.TEACHER, UserMode.PRINCIPAL],
    setUserMode: (userMode: UserMode) => console.log(userMode),
  }

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
            <Router>
              <ThemeProvider>
                <TeacherNavbar userStatus={userStatus} />
              </ThemeProvider>
            </Router>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
