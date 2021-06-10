import classes from "./AdultTeamSecQues.module.css";
import Card from "../../UI/Card/Card";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AdultTeamSecQues = (props) => {
  return (
    <div className={classes.AdultTeamSecQues}>
      <Card>
        <div className={classes.containerDiv}>
          <p className={classes.questionNumber}>2 / 10</p>
          <h1>What Gender group are needed for this division?</h1>
          <p className={classes.text}>
            Make a selection based on the options below
          </p>

          <div className={classes.selectDiv}>
            <div className={classes.checkboxContainer}>
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
                label={<p className={classes.formControlLabel}>Men</p>}
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
                label={<p className={classes.formControlLabel}>Women</p>}
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
                label={<p className={classes.formControlLabel}>Co-ed</p>}
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

export default AdultTeamSecQues;
