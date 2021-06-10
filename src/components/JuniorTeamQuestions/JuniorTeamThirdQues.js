import classes from "./JuniorTeamThirdQues.module.css";
import Card from "../../UI/Card/Card";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const JuniorTeamThirdQues = (props) => {
  //   const onSubmitHandler = (event) => {
  //     console.log("first next");
  //     event.preventDefault();
  //   };

  return (
    <div className={classes.JuniorTeamThirdQues}>
      <Card>
        <div className={classes.containerDiv}>
          <p className={classes.questionNumber}>3 / 10</p>
          <h1>What are skills do your team have?</h1>
          <p className={classes.text}>
            Choose one or more skills from the below 5 skills
          </p>

          <div className={classes.selectDiv}>
            <div className={classes.checkboxContainer}>
              <FormControlLabel
                style={{ marginRight: 25 }}
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CheckCircleIcon style={{ color: "black" }} />}
                    style={{
                      color: "#faf205",
                      transform: "scale(1.5)",
                    }}
                  />
                }
                label={<p className={classes.formControlLabel}>Bronze</p>}
              />
              <FormControlLabel
                style={{ marginRight: 25 }}
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CheckCircleIcon style={{ color: "black" }} />}
                    style={{
                      color: "#faf205",
                      transform: "scale(1.5)",
                    }}
                  />
                }
                label={<p className={classes.formControlLabel}>Silver</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CheckCircleIcon style={{ color: "black" }} />}
                    style={{
                      color: "#faf205",
                      transform: "scale(1.5)",
                    }}
                  />
                }
                label={<p className={classes.formControlLabel}>Gold</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CheckCircleIcon style={{ color: "black" }} />}
                    style={{
                      color: "#faf205",
                      transform: "scale(1.5)",
                    }}
                  />
                }
                label={<p className={classes.formControlLabel}>High School</p>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CheckCircleIcon style={{ color: "black" }} />}
                    style={{
                      color: "#faf205",
                      transform: "scale(1.5)",
                    }}
                  />
                }
                label={<p className={classes.formControlLabel}>Club</p>}
              />
            </div>
          </div>
          <div className={classes.buttonCls}>
            <button
              type="reset"
              className={classes.back}
              onClick={props.clickedBack.bind(null, "clikced")}
            >
              Back
            </button>
            <button
              type="submit"
              className={classes.next}
              onClick={props.clicked.bind(null, "clikced")}
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JuniorTeamThirdQues;
