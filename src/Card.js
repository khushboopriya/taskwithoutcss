import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "./Dailog";
import globalData from "./data";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CardHeader from "@mui/material/CardHeader";
import Switch from "@mui/material/Switch";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography
// } from "@material-ui/core";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  const [name, setName] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Share to web"
        subheader="Public and share link with anyone"
        action={
          <Switch
            checked={false}
            // onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
      />
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            id="outlined-name"
            label="People, Emails, Groups "
            value={name}
            onClick={() => setDialogOpen(true)}
            // fullWidth
          />
          <Button variant="outlined">Invite</Button>
        </Box>
        {/* <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Sample Dialog</DialogTitle>
        <DialogContent dividers>
          <Typography>Your content here</Typography>
        </DialogContent>
      </Dialog> */}
        <Dialog dialogOpenFunction={dialogOpen} setDialogOpen={setDialogOpen} />
        <List>
          {globalData.map((item, index) => (
            <ListItem button key={item}>
              {/* <ListItemIcon>{item.avatarIcon}</ListItemIcon> */}
              <ListItemText primary={item.title} />
              <ListItemText primary={item.access} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">learn about sharing</Button>
      </CardActions>
    </Card>
  );
}
