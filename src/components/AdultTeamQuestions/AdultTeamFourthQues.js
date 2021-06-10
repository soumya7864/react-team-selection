import classes from "./AdultTeamFourthQues.module.css";
import Card from "../../UI/Card/Card";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AdultTeamFourthQues = (props) => {
  return (
    <div className={classes.AdultTeamFourthQues}>
      <Card>
        <div className={classes.containerDiv}>
          <p className={classes.questionNumber}>4 / 10</p>
          <h1>What are skills do your team have?</h1>
          <p className={classes.text}>
            Choose one or more skills from the below 5 skills
          </p>

          <div className={classes.selectDiv}>
            <div className={classes.checkboxContainer}>
              <FormControlLabel
                style={{ width: "30%" }}
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
                label={<p className={classes.formControlLabel}>A</p>}
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
                label={<p className={classes.formControlLabel}>AA</p>}
              />
              <FormControlLabel
                style={{ width: "38%" }}
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
                label={<p className={classes.formControlLabel}>AAA</p>}
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
                label={<p className={classes.formControlLabel}>Novice</p>}
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
                label={<p className={classes.formControlLabel}>Masters</p>}
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

export default AdultTeamFourthQues;
