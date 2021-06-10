import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { selectActions } from "../../store/select-slice";

const ageBrackets = [
  { label: "Adult", value: "adult" },
  { label: "Junior", value: "junior" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "white" : "black",
    padding: 20,
    fontWeight: 600,
    fontSize: "16px",
  }),
};

const SelectComp = (props) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(3);

  const handleChange = (event) => {
    setSelectedValue(event.value);
    console.log(event.value);
    dispatch(
      selectActions.replaceCart({
        selectedPickValue: event.value,
      })
    );
  };

  return (
    <Select
      defaultValue={ageBrackets[2]}
      options={ageBrackets}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,

        colors: {
          ...theme.colors,
          primary25: "yellow",
          primary: "black",
        },
      })}
      value={ageBrackets.find((obj) => obj.value === selectedValue)}
      onChange={handleChange}
      styles={customStyles}
      placeholder="Age Bracket"
      width="200px"
      menuColor="black"
    />
  );
};

export default SelectComp;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: "block",
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// export default function ControlledOpenSelect() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState("");
//   const [open, setOpen] = React.useState(false);

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-controlled-open-select-label">
//           Age Bracket
//         </InputLabel>
//         <Select
//           labelId="demo-controlled-open-select-label"
//           id="demo-controlled-open-select"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={"adult"}>Adult</MenuItem>
//           <MenuItem value={"junior"}>Junior</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
