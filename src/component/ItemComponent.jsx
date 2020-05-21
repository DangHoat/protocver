import React , {useState}from 'react'
import { Button, Fade,
        Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, } from 'reactstrap';
const ItemComponent =()=>{
    const [hide,setHide] = useState(true)
    const toggle  =()=> setHide(!hide)
        return(
            <div>
                <Card>
                    <CardTitle>

                    </CardTitle>
                    <Fade in={hide} tag="h5" className="mt-3"></Fade>
                        <CardBody>
                        
                        
                            
                        </CardBody>
                    <Fade/>
                </Card>
               
            </div>
        )   
    }

export default ItemComponent;