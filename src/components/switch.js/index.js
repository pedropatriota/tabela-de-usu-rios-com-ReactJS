import React from "react";
import { User, Shield } from './style';
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";


const IOSSwitch = withStyles(theme => ({
  root: {
    width: 100,
    height: 60,
    padding: 2,
    margin: 5
  },
  switchBase: {
    padding: 2,
    "&$checked": {
      transform: "translateX(50px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#fff",
        opacity: 1,        
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",    
    }
  },  
  track: {
    borderRadius: 5,    
    backgroundColor: "#fff",
    opacity: 1
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,        
        track: classes.track,
        checked: classes.checked
      }}      
      {...props}
    />
    
  );
});

export default function Check() {
  const [check, setCheck] = React.useState(true);

  const handleChange = event => {
    setCheck(event.target.checked);
  };

  return (   
    <IOSSwitch 
        checked={check} 
        onChange={handleChange} 
        name="checked" 
        icon = {<Shield />}
        checkedIcon={<User />}
    />            
  );
}
