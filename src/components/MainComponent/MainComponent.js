import Card from "../../UI/Card/Card";
import classes from "./MainComponent.module.css";
import SelectComp from "../Select/Select";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdultTeamSecQues from "../AdultTeamQuestions/AdultTeamSecQues";
import AdultTeamThirdQues from "../AdultTeamQuestions/AdultTeamThirdQues";
import AdultTeamFourthQues from "../AdultTeamQuestions/AdultTeamFourthQues";
import JuniorTeamSecQues from "../JuniorTeamQuestions/JuniorTeamSecQues";
import JuniorTeamThirdQues from "../JuniorTeamQuestions/JuniorTeamThirdQues";
import FinalTeamQuestion from "../FinalTeamQuestion/FinalTeamQuestion";

const MainComponent = () => {
  const selectedPickValue = useSelector((state) => state.sel.selectedPickValue);

  const [selectedOption, setSelectedOption] = useState([]);
  const [isAdult, setIsAdult] = useState(false);
  const [isJunior, setIsJunior] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFinalQuesVisible, setIsFinalQuesVisible] = useState(false);

  const [isAdultQues2, setIsAdultQues2] = useState(false);
  const [isAdultQues3, setIsAdultQues3] = useState(false);
  const [isAdultQues4, setIsAdultQues4] = useState(false);

  const [isJuniorQues2, setIsJuniorQues2] = useState(false);
  const [isJuniorQues3, setIsJuniorQues3] = useState(false);

  const onChangeHandler = (event) => {
    event.preventDefault();
    console.log("selectedPickValue", selectedPickValue);
    if (selectedPickValue === "adult") {
      setIsVisible(false);
      setIsAdult(true);
      setIsAdultQues2(true);
    } else if (selectedPickValue === "junior") {
      setIsVisible(false);
      setIsJunior(true);
      setIsJuniorQues2(true);
    }
  };

  const onAdultTeamSecQuesHandler = () => {
    setIsAdultQues2(false);
    setIsAdultQues3(true);
  };
  const onAdultTeamSecBackHandler = () => {
    setIsAdultQues2(false);
    setIsVisible(true);
  };

  const onAdultTeamThirdQuesHandler = () => {
    setIsAdultQues3(false);
    setIsAdultQues4(true);
  };
  const onAdultTeamThirdBackHandler = () => {
    setIsAdultQues2(true);
    setIsAdultQues3(false);
  };

  const onAdultTeamFourthQuesHandler = () => {
    setIsAdultQues4(false);
    setIsFinalQuesVisible(true);
  };
  const onAdultTeamFourthBackHandler = () => {
    setIsAdultQues3(true);
    setIsAdultQues4(false);
  };

  const onAdultTeamBackHandler = () => {
    setIsAdultQues4(true);
    setIsFinalQuesVisible(false);
  };

  //Junior screen
  const onJuniorTeamSecQuesHandler = () => {
    setIsJuniorQues2(false);
    setIsJuniorQues3(true);
  };
  const onJuniorTeamSecBackHandler = () => {
    setIsVisible(true);
    setIsJuniorQues2(false);
  };

  const onJuniorTeamThirdQuesHandler = () => {
    setIsJuniorQues3(false);
    setIsFinalQuesVisible(true);
  };
  const onJuniorTeamThirdBackHandler = () => {
    setIsJuniorQues2(true);
    setIsJuniorQues3(false);
  };

  const onJuniorTeamBackHandler = () => {
    setIsFinalQuesVisible(false);
    setIsJuniorQues3(true);
  };

  let render;
  if (isAdult && isAdultQues2) {
    render = (
      <AdultTeamSecQues
        clicked={onAdultTeamSecQuesHandler}
        clickedBack={onAdultTeamSecBackHandler}
      />
    );
  } else if (isAdult && !isAdultQues2 && isAdultQues3) {
    render = (
      <AdultTeamThirdQues
        clicked={onAdultTeamThirdQuesHandler}
        clickedBack={onAdultTeamThirdBackHandler}
      />
    );
  } else if (isAdult && !isAdultQues3 && isAdultQues4) {
    render = (
      <AdultTeamFourthQues
        clicked={onAdultTeamFourthQuesHandler}
        clickedBack={onAdultTeamFourthBackHandler}
      />
    );
  } else if (isAdult && !isAdultQues4 && isFinalQuesVisible) {
    render = (
      <FinalTeamQuestion
        clickedBack={onAdultTeamBackHandler}
        number={"senior"}
      />
    );
  }

  if (isJunior && isJuniorQues2) {
    render = (
      <JuniorTeamSecQues
        clicked={onJuniorTeamSecQuesHandler}
        clickedBack={onJuniorTeamSecBackHandler}
      />
    );
  } else if (isJunior && !isJuniorQues2 && isJuniorQues3) {
    render = (
      <JuniorTeamThirdQues
        clicked={onJuniorTeamThirdQuesHandler}
        clickedBack={onJuniorTeamThirdBackHandler}
      />
    );
  } else if (isJunior && !isJuniorQues3 && isFinalQuesVisible) {
    render = (
      <FinalTeamQuestion
        clickedBack={onJuniorTeamBackHandler}
        number={"junior"}
      />
    );
  }

  return (
    <div className={classes.MainComponent}>
      {isVisible && (
        <Card>
          <div className={classes.containerDiv}>
            <p className={classes.questionNumber}>1 / 10</p>
            <h1>What type of age bracket is needed?</h1>
            <p className={classes.text}>
              Make a selection based on the desire age group
            </p>

            <div className={classes.selectDiv}>
              <SelectComp value={selectedOption} />
            </div>
            <div className={classes.buttonCls}>
              <button type="reset" className={classes.back}>
                Back
              </button>
              <button
                type="submit"
                className={classes.next}
                onClick={onChangeHandler}
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}
      {render}
    </div>
  );
};

export default MainComponent;
