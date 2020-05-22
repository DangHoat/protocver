import React ,{Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import theme  from "../style/theme";
import LeftCol from './LeftCol'
import WorkSpace from './WorkSpace'



class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MuiThemeProvider theme = {theme}>
                    <LeftCol/>
                    <WorkSpace/>
            </MuiThemeProvider>
        )
    }
}
export default Main;