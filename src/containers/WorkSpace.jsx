import React ,{Component} from 'react'
import  {MuiThemeProvider} from "@material-ui/core";

import theme from "../style/theme";
import Main from "./Main";
import SpaceHeader from "../component/SpaceHeader";
import SpaceWork from "../component/SpaceWork";

class WorkSpace extends React.Component{
  constructor(props){
      super(props)
  }
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <div className= "word_space">
                    <SpaceHeader/>
                    <SpaceWork/>
                </div>
            </MuiThemeProvider>

        )
    }
}
export default WorkSpace;