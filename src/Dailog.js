import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@material-ui/core/Button";
import globalData from "./data";

const InputDialog = (props) => {
  const data = [
    { title: "Wade Cooper", year: 1994, tag: "Select a Person" },
    { title: "Arlene Mccoy", year: 1972, tag: "Select a Person" },
    { title: "Product", year: 1972, tag: "Select a Group" },
    { title: "Engineering", year: 1972, tag: "Select a Group" }
  ];
  const [value, setValue] = useState();
  const [access, setAccess] = useState();
  console.log("value", value);
  console.log("access", access);

  const handleAccessChange = (event) => {
    setAccess(event.target.value);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleInvite = () => {
    console.log(globalData);
    globalData.push({ title: value.title, access: access });
    console.log(globalData);
    props.setDialogOpen(false);
  };

  return (
    <Dialog
      open={props.dialogOpenFunction}
      onClose={() => props.setDialogOpen(false)}
    >
      <DialogTitle>Sample Dialog</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} direction="row">
          <Typography>Your content here</Typography>
          <Button
            variant="outlined"
            onClick={(e) => {
              handleInvite(e);
            }}
            disabled={Boolean(!value || !access)}
          >
            Invite
          </Button>
        </Stack>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            onChange={handleAccessChange}
            // displayEmpty
            // inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"No Access"}>No access</MenuItem>
            <MenuItem value={"Full access"}>Full Access</MenuItem>
            <MenuItem value={"Can View"}>Can View</MenuItem>
            <MenuItem value={"Can Edit"}>Can Edit</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          id="grouped-demo"
          options={data.sort((a, b) => -b.tag.localeCompare(a.firstLetter))}
          groupBy={(option) => option.tag}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
          onChange={(event, newValue) => {
            // setValue(newValue);
            // {
            //   // if (value.length !== 0) {
            //   setBtnDisabled(false);
            //   // }
            // }
            handleValueChange(newValue);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default InputDialog;
