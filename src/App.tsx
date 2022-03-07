import ThemeProvider from './studento-library/ThemeProvider';
import styled from 'styled-components';
import PopupUpload from './studento-library/popups/components/PopupUpload';
import { useState } from 'react';
import { DropdownSearchFormBase, MultipleChoiceFormBase, SingleChoiceFormBase, TextAreaFormBase, TextFormBase } from './studento-library/forms/base-components';
import WeekDayForm from './studento-library/forms/components/WeekDayFormBase';
import PasswordForm from './studento-library/forms/components/PasswordForm';
import DateForm from './studento-library/forms/components/DateForm';
import TimeForm from './studento-library/forms/components/TimeForm';
import UsernameForm from './studento-library/forms/components/UsernameForm';
import ToggleRow from './studento-library/forms/base-components/ToggleRow';
import RadioButtonFormBase from './studento-library/forms/base-components/RadioButtonFormBase';
import LanguageForm from './studento-library/forms/components/LanguageForm';
import NavbarBase from './studento-library/navigation/base-components/NavbarBase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentNavbar from './studento-library/navigation/components/StudentNavbar';
import TeacherNavbar from './studento-library/navigation/components/TeacherNavbar';
import AdminNavbar from './studento-library/navigation/components/AdminNavbar';

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
  const [date, setDate] = useState<string>("2022-03-02");
  const [fruit, setFruit] = useState<string>("");
  const [time, setTime] = useState<string>("--:--");
  const [weekday, setWeekday] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [radio, setRadio] = useState<string>("");
  const [selections, setSelections] = useState<{[key: string]: boolean}>({first: false, second: false, third: false});
  const [selection, setSelection] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  const userStatus = {
    username: "Leonhard Euler",
    school: "University of Venice",
    logoutUrl: "/Logout",
    profileUrl: "/Profile",
    dashboardUrl: "/",
  }

  const featureTiles =  {
    first: {title: "First feature", description: "Best feature ever", url: "first", icon: "school"},
    second: {title: "Second feature", description: "Second best feature ever", url: "second", icon: "calendar_month"}
  };

  const navButtons = {
    home: {title: "Home", icon: "home", url: "home"},
    find: {title: "Find", icon: "search", url: "search"},
    create: {title: "Create", icon: "add", url: "add"}
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
                <AdminNavbar userStatus={userStatus} />
                <div style={{display:"flex", flexFlow:"row wrap", gap:"0px", maxWidth: "500px", backgroundColor: "#F7F6F5", marginTop: "100px"}}>

                  <PopupUpload title={"Upload File"} fileHandler={() => console.log("uploading")} maxSizeMB={5}/>
                  <DateForm value={date} setValue={setDate} min={"2022-03-04"} />
                  <LanguageForm />
                  <SingleChoiceFormBase value={fruit} setValue={setFruit} label={"Single Choice"} choices={{first: "Banana", second: "Apple", third: "Pineapple"}}/>
                  <DropdownSearchFormBase label={"Dropdown with groups and search"} value={selection} setValue={setSelection} optionGroups={{Group1: {title: "First group", options: {a: "Banana", b: "Pineapple"}}, Group2: {title: "Second group", options: {c: "banan", d: "ananas"}}}}/>
                  <MultipleChoiceFormBase value={selections} setValue={setSelections} label={"Multiple choice"} choices={{first: "Banana", second: "Apple", third: "Pineapple"}}/>
                  <TextAreaFormBase value={fruit} setValue={setFruit} label={"Text area"} placeholder={""} defaultNote={"Don't break me"} />
                  <TextFormBase value={fruit} setValue={setFruit} label={"Text form with print icon"} placeholder={""} errorMessage={""} />
                  <TimeForm value={time} setValue={setTime} isHorizontal={true} errorMessage={""}/>
                  <WeekDayForm value={weekday} setValue={setWeekday} isWorkingWeekOnly={true} />
                  <UsernameForm value={password} setValue={setPassword} />
                  <PasswordForm value={password} setValue={setPassword} />
                  <ToggleRow label={"Dark mode"} value={isToggled} setValue={setIsToggled} height={"80px"}/>
                  <RadioButtonFormBase value={radio} setValue={setRadio} label={"Radio buttons"} options={{first: "Pineapple", second: "Banana", third: "Third time's the charm"}}/>
                </div>
              </ThemeProvider>
            </Router>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
