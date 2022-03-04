import ThemeProvider from './studento-library/ThemeProvider';
import styled from 'styled-components';
import PopupUpload from './studento-library/popups/components/PopupUpload';
import TestComponent from './studento-library/TestComponent';
import { useState } from 'react';
import { SingleChoiceFormBase, TextFormBase } from './studento-library/forms/base-components';
import WeekDayForm from './studento-library/forms/components/WeekDayFormBase';
import PasswordForm from './studento-library/forms/components/PasswordForm';
import DateForm from './studento-library/forms/components/DateForm';
import TimeForm from './studento-library/forms/components/TimeForm';
import UsernameForm from './studento-library/forms/components/UsernameForm';
import ToggleRow from './studento-library/forms/base-components/ToggleRow';
import RadioButtonFormBase from './studento-library/forms/base-components/RadioButtonFormBase';

const StyledApp = styled.div`
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
                <DateForm value={date} setValue={setDate} min={"2022-03-04"} />
                <SingleChoiceFormBase value={fruit} setValue={setFruit} label={"Single Choice"} choices={{first: "Banana", second: "Apple", third: "Pineapple"}}/>
                <TimeForm value={time} setValue={setTime} />
                <WeekDayForm value={weekday} setValue={setWeekday} isWorkingWeekOnly={true} />
                <UsernameForm value={password} setValue={setPassword} />
                <PasswordForm value={password} setValue={setPassword} />
                <TextFormBase value={password} setValue={setPassword} label={"xd"} placeholder={""} icon={"print"}/>
                <ToggleRow label={"Dark mode"} value={isToggled} setValue={setIsToggled} />
                <RadioButtonFormBase value={radio} setValue={setRadio} label={"Radio buttons"} options={{first: "Pineapple", second: "Banana", third: "Third time's the charm"}}/>
              </div>
            </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
