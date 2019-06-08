import { createMuiTheme } from "@material-ui/core/styles";
import pink from '@material-ui/core/colors/pink';


export default createMuiTheme({
    pallete:{
        primary:pink
    },
    overrides: { 
      MuiButton: {
        containedPrimary:{
            backgroundColor:'#f50057',
            "&:hover": {
                color:'#35033a',
                backgroundColor:'#f50057',
              }
        },
        contained:{ 
            "&.Mui-disabled":{
                color:"#dcd4d4",
                backgroundColor:"rgb(90, 44, 44)"
            }
            }
      },
      MuiPaper: {
          root: {
            "&:hover": {
                border:"2px solid #f50057",
              }
          }
        
      },
      MuiRadio: {
          colorSecondary : {
            "&.Mui-disabled": {
                color:"rgba(214, 208, 208, 0.26)"
                     }
              }
           
      },
      MuiFormControlLabel: {
          label :{
            "&.Mui-disabled": {
                color:"rgba(214, 208, 208, 0.26)"
                     }
          }
      },
      MuiFormGroup : {
          root :{
              flexDirection : "row"
          }
      }

    }
  });