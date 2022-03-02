import ThemeProvider from './studento-library/ThemeProvider';
import styled from 'styled-components';
import PopupUpload from './studento-library/popups/components/PopupUpload';
import TestComponent from './studento-library/TestComponent';
import { useState } from 'react';
import { TextFormBase, TextAreaFormBase, DropdownFormBase, DropdownGroupedFormBase, DropdownSearchFormBase, DateFormBase, MultipleChoiceFormBase } from './studento-library/forms/base-components';

const StyledApp = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-style: 'normal';
  font-weight: 'normal';

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {
  const [input, setInput] = useState<string>("");
  const [choice, setChoice] = useState<string>("default");
  const [date, setDate] = useState<string>("2021-11-04");
  const [multichoice, setMultichoice] = useState<string>("");

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
                <TextAreaFormBase label={"About Me"} formId={"About Me"} placeholder={""} isHorizontal={true} value={input} onChange={setInput} isOptional={true} />
                <TextFormBase label={"First Name"} formId={"First Name"} placeholder={"First Name"} isHorizontal={true} value={input} onChange={setInput} icon={"email"} isOptional={true} isCompact={true} />
                <TextFormBase label={"Middle Name"} formId={"Middle Name"} placeholder={"Middle Name"} isHorizontal={false} value={input} onChange={setInput} />
                <MultipleChoiceFormBase value={multichoice} setValue={setMultichoice} label={"Multiple Choice"} choices={{uga: "Buba", guge: "Gugi"}} />
                <TextFormBase label={"Middle Name"} formId={"Middasdle Name"} placeholder={"Middle Name"} isHorizontal={true} value={input} onChange={setInput} />
                <TextFormBase label={"Middle Name"} formId={"Middlhhe Name"} placeholder={"Middle Name"} isHorizontal={true} value={input} onChange={setInput} />
                <TextFormBase label={"Last Name"} formId={"Last Name"} placeholder={"Last Name"} isDisabled={true} value={input} onChange={setInput}/>
                <DropdownFormBase value={choice} setValue={setChoice} label={"Choose"} options={{banana: "Banana", haha: "Haha"}} />
                <DropdownGroupedFormBase value={choice} setValue={setChoice} label={"Choose2"} optionGroups={{class3C:{title: "3.C", options: {banana: "Banana", haha: "Haha"}}, class4C:{title: "4.C", options: {appul: "Apple", pi314: "Pie", asd:"asd", dsa:"dsa", sda:"sda", sad:"sad"}}}}/>
                <DropdownSearchFormBase value={choice} setValue={setChoice} label={"Choose22"} optionGroups={{class3C:{title: "3.C", options: {bananda: "Banana", hahaa: "Haha"}}, class4C:{title: "4.C", options: {appusl: "Apple", pi314d: "Pie", asad:"Bbnana", dsaaa:"banan", sdaa:"Banan", saad:"sad", sada:"sada"}}}}/>
                <TestComponent />
                <DateFormBase label={"Important Date"} value={date} setValue={setDate} />

              </div>
            </ThemeProvider>
          </StyledApp>
        </body>
      </>
  );
}

export default App;
