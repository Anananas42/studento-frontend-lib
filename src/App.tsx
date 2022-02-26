import ThemeProvider from './studento-library/ThemeProvider';
import styled from 'styled-components';
import { BtnPrimaryL, BtnPrimaryM } from './studento-library/buttons/components/BtnPrimary';
import { BtnOutlineL, BtnOutlineM } from './studento-library/buttons/components/BtnOutline';
import { BtnTertiaryL, BtnTertiaryM } from './studento-library/buttons/components/BtnTertiary';
import { BtnSecondaryL, BtnSecondaryM } from './studento-library/buttons/components/BtnSecondary';
import { BtnConfirmL, BtnConfirmM } from './studento-library/buttons/components/BtnConfirm';
import { BtnDangerL, BtnDangerM } from './studento-library/buttons/components/BtnDanger';
import { BtnCloseL, BtnCloseM } from './studento-library/buttons/components/BtnClose';
import PopupUpload from './studento-library/popups/components/PopupUpload';
import { BtnTextL, BtnTextM } from './studento-library/buttons/components/BtnText';
import { BtnCTAL, BtnCTAM } from './studento-library/buttons/components/BtnCTA';
import PopupConfirm from './studento-library/popups/components/PopupConfirm';
import PopupDelete from './studento-library/popups/components/PopupDelete';
import PopupSuccess from './studento-library/popups/components/PopupSuccess';
import TextFormBase from './studento-library/forms/base-components/TextFormBase';

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
              <div style={{display:"flex", flexFlow:"row wrap", gap:"10px", maxWidth: "800px"}}>
                <BtnTextL onClick={() => console.log("Pressed")}>Woah</BtnTextL>
                <BtnTextM onClick={() => console.log("Pressed")}>Woah</BtnTextM>
                <BtnCTAL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnCTAL>
                <BtnCTAM icon={"login"} isAfter={true} onClick={() => console.log("Pressed")}>LOGIN</BtnCTAM>
                <BtnPrimaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnPrimaryL>
                <BtnPrimaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnPrimaryM>
                <BtnSecondaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnSecondaryL>
                <BtnSecondaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnSecondaryM>
                <BtnTertiaryL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnTertiaryL>
                <BtnTertiaryM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnTertiaryM>
                <BtnOutlineL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnOutlineL>
                <BtnOutlineM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnOutlineM>
                <BtnConfirmL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnConfirmL>
                <BtnConfirmM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnConfirmM>
                <BtnDangerL icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnDangerL>
                <BtnDangerM icon={"login"} isAfter={false} onClick={() => console.log("Pressed")}>LOGIN</BtnDangerM>
                <BtnCloseL onClick={() => console.log("Pressed")} />
                <BtnCloseM onClick={() => console.log("Pressed")} />
                <PopupUpload title={"Upload File"} fileHandler={() => console.log("uploading")} maxSizeMB={5}/>


                <PopupSuccess title={"Blabla"} btnText={"YEAH!"} sidenote={"This is a sidenote. Available for all popups."}>Jsi si timhle opravdu jisty?</PopupSuccess>
                <TextFormBase label={"First Name"} formId={"First Name"} placeholder={"Wow"} />

              </div>
            </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
