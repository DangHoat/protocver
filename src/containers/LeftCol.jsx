import React ,{Component} from 'react'
import ItemComponent from "../component/ItemComponent";
class LeftCol extends React.Component{
  constructor(props){
      super(props)
  }
    render(){
        return(
            <div className= "left_col">
                <ItemComponent/>
            </div>
        )
    }
}
export default LeftCol;