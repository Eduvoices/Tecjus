import styled from "styled-components";

export const Body = styled.div`
display: flex;
  margin-top: 50px;
  justify-content: center;
  background-color: #FFFCFF;


  button {
  margin-right: 2.5px;
  margin-left: 2.5px;
  width: 75px;
  cursor: pointer;
  box-shadow: 0px 0px 2px gray;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
}

#header {
  padding: 10px;
  color: #d36c6c;
  font-size: 26px;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;

  button {
    background-color:#92a1d1;
  }
}

#container {
  width: 770px;
}
#weekdays {
  width: 100%;
  display: flex;
  color: #247BA0;
  justify-content: space-between;

  div {
    width: 100px;
    padding: 10px;
  }
}

#calendar {
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.day {
  width: 100px;
  padding: 10px;
  height: 100px;
  cursor: pointer;
  box-sizing: border-box;
  background-color: white;
  margin: 5px;
  box-shadow: 0px 0px 3px #CBD4C2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: #e8faed;
  }

  & + .currentDay {
    background-color:#e8f4fa;
  }

  .event {
  font-size: 10px;
  padding: 3px;
  background-color: #58bae4;
  color: white;
  border-radius: 5px;
  max-height: 55px;
  overflow: hidden;
}
.padding {
  cursor: default !important;
  background-color: #FFFCFF !important;
  box-shadow: none !important;
}
}

#newEventModal, #deleteEventModal {
  z-index: 20;
  padding: 25px;
  background-color: #e8f4fa;
  box-shadow: 0px 0px 3px black;
  border-radius: 5px;
  width: 350px;
  top: 100px;
  left: calc(50% - 175px);
  position: absolute;
  font-family: sans-serif;
}
#eventTitleInput {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px gray;
}
#eventTitleInput.error {
  border: 2px solid red;
}
#cancelButton, #deleteButton {
  background-color: #d36c6c;
}
#saveButton, #closeButton {
  background-color: #92a1d1;
}
#eventText {
  font-size: 14px;
}
#modalBackDrop {
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0,0,0,0.8);
}
`