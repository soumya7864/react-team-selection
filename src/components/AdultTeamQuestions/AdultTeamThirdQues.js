import classes from "./AdultTeamThirdQues.module.css";
import Card from "../../UI/Card/Card";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AdultTeamThirdQues = (props) => {
  return (
    <div className={classes.AdultTeamThirdQues}>
      <Card>
        <div className={classes.containerDiv}>
          <p className={classes.questionNumber}>3 / 10</p>
          <h1>What is the age group needed for this division?</h1>
          <p className={classes.text}>
            Choose a selection based on the classifications below
          </p>

          <div className={classes.selectDiv}>
            <div className={classes.checkboxContainer}>
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
                label={<p className={classes.formControlLabel}>26-U</p>}
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
                label={<p className={classes.formControlLabel}>40-U</p>}
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
                label={<p className={classes.formControlLabel}>50-U</p>}
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
                label={<p className={classes.formControlLabel}>60-U</p>}
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
                label={<p className={classes.formControlLabel}>70-U</p>}
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

export default AdultTeamThirdQues;
