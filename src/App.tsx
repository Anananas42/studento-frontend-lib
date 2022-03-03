import ThemeProvider from './studento-library/ThemeProvider';
import styled from 'styled-components';
import PopupUpload from './studento-library/popups/components/PopupUpload';
import TestComponent from './studento-library/TestComponent';
import { useState } from 'react';
import { DateFormBase, SingleChoiceFormBase, TextFormBase, TimeFormBase } from './studento-library/forms/base-components';
import WeekDayForm from './studento-library/forms/components/WeekDayFormBase';
import PasswordForm from './studento-library/forms/components/PasswordForm';

const StyledApp = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-style: 'normal';
  font-weight: 'normal';

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {
  const [date, setDate] = useState<string>("2021-11-04");
  const [fruit, setFruit] = useState<string>("");
  const [time, setTime] = useState<string>("--:--");
  const [weekday, setWeekday] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
              <div style={{display:"flex", flexFlow:"row wrap", gap:"0px", maxWidth: "500px"}}>
                <PopupUpload title={"Upload File"} fileHandler={() => console.log("uploading")} maxSizeMB={5}/>
                <TestComponent />
                <DateFormBase label={"Important Date"} value={date} setValue={setDate} />
                <SingleChoiceFormBase value={fruit} setValue={setFruit} label={"Single Choice"} choices={{first: "Banana", second: "Apple", third: "Pineapple"}}/>
                <TimeFormBase label={"Choose Time"} value={time} setValue={setTime} />
                <WeekDayForm value={weekday} setValue={setWeekday} />
                <PasswordForm value={password} setValue={setPassword} label={"Password"} placeholder={"Enter password"} />
                <TextFormBase value={password} setValue={setPassword} label={"xd"} placeholder={""} icon={"print"}/>
              </div>
            </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
