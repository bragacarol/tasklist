import * as React from "react";
import {
  ListItemText,
  Checkbox,
  IconButton,
  ListItemIcon,
  ListItemButton,
  ListItem,
} from "@mui/material"; 
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ToDoItem() {
  //  const classes = useStyles();

  return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleOutlineIcon />}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={`Line`} />
        </ListItemButton>
      </ListItem>
  );
}
