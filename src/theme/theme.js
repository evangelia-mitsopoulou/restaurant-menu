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
        }
      },
      MuiPaper: {
          root: {
            "&:hover": {
                border:"2px solid #f50057",
              }
          }
        
      }
    }
  });