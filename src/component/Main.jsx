import React ,{Component} from 'react'
import LeftCol from './LeftCol'
import WordSpace from './WordSpace'
import {Col,Row} from 'reactstrap'
class Main extends Component{
  constructor(props){
      super(props)
  }
    render(){
        return(
            <Row>
                <Col md ={3}>
                    <LeftCol/>
                </Col>
                <Col md = {9}>
                    <WordSpace/>
                </Col>
            </Row>        
        )
    }
}
export default Main;