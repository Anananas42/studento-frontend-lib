import ThemeProvider from './studento-library/ThemeProvider';
import Sidenote from './studento-library/utilities/Sidenote';
import SystemState, { StateType } from './studento-library/utilities/SystemState';
import styled from 'styled-components';
import { BtnCTAL, BtnCTAM, BtnCTAS } from './studento-library/buttons/components/BtnCTA';
import { BtnPrimaryL, BtnPrimaryM } from './studento-library/buttons/components/BtnPrimary';
import { BtnOutlineL, BtnOutlineM } from './studento-library/buttons/components/BtnOutline';
import { BtnTertiaryL, BtnTertiaryM } from './studento-library/buttons/components/BtnTertiary';
import { BtnSecondaryL, BtnSecondaryM } from './studento-library/buttons/components/BtnSecondary';
import { BtnConfirmL, BtnConfirmM } from './studento-library/buttons/components/BtnConfirm';
import { BtnDangerL, BtnDangerM } from './studento-library/buttons/components/BtnDanger';
import { BtnCloseL, BtnCloseM } from './studento-library/buttons/components/BtnClose';
import PopupBase from './studento-library/popups/base-components/PopupBase';
import { IconL } from './studento-library/buttons/shared/Icon';
import PopupSuccess from './studento-library/popups/components/PopupSuccess';
import PopupDelete from './studento-library/popups/components/PopupDelete';

const StyledApp = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-style: 'normal';
  font-weight: 'normal';

  * {
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
              <div style={{display:"flex", flexFlow:"column nowrap", gap:"10px"}}>
                <SystemState type={StateType.Neutral}>
                  Wow! Oh my god, I can't believe this is really happening. React is such a great tool.
                </SystemState>
                <SystemState type={StateType.Warning}>
                  Notice me finally!
                </SystemState>
                <SystemState type={StateType.Error}>
                  Ah bummer, our server is refusing to work again...
                </SystemState>
                <SystemState type={StateType.Success}>
                  Grades added.
                </SystemState>
                <Sidenote>
                  Grades added.
                </Sidenote>
                <BtnCTAL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnCTAL>
                <BtnCTAM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnCTAM>
                <BtnPrimaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnPrimaryL>
                <BtnPrimaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnPrimaryM>
                <BtnSecondaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnSecondaryL>
                <BtnSecondaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnSecondaryM>
                <BtnTertiaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnTertiaryL>
                <BtnTertiaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnTertiaryM>
                <BtnOutlineL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnOutlineL>
                <BtnOutlineM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnOutlineM>
                <BtnConfirmL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnConfirmL>
                <BtnPrimaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnPrimaryL>
                <BtnConfirmM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnConfirmM>
                <BtnDangerL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnDangerL>
                <BtnDangerM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnDangerM>
                <BtnCloseL onClick={() => console.log("Pressed")}>LOGIN</BtnCloseL>
                <BtnCloseM onClick={() => console.log("Pressed")}>LOGIN</BtnCloseM>
                <PopupDelete title={"Good Job!"} event={() => console.log("deleting")}>Your application has been successful.</PopupDelete>
              </div>
            </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
