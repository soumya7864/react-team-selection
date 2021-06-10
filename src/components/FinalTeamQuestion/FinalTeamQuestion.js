import classes from "./FinalTeamQuestion.module.css";
import Card from "../../UI/Card/Card";
import React from "react";

const FinalTeamQuestion = (props) => {
  return (
    <div className={classes.FinalTeamQuestion}>
      <Card>
        <div className={classes.containerDiv}>
          <p className={classes.questionNumber}>
            {props.number === "senior" ? "5 / 10 " : "4 / 10"}
          </p>
          <h1>What is the name of your team?</h1>
          <form>
            <div className={classes.control}>
              <label htmlFor="name">Name of the Team</label>
              <input type="name" id="name" required />
            </div>
          </form>

          <div className={classes.buttonCls}>
            <button
              type="reset"
              className={classes.back}
              onClick={props.clickedBack.bind(null, "clikced")}
            >
              Back
            </button>
            <button type="submit" className={classes.next}>
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinalTeamQuestion;
