import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {TextField,Grid,Button,FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            padding: '0ch'
        },
        flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    cssLabel: {
        color: 'black',

        '&$cssFocused': {
            color: 'green',
        },
    },
    cssFocused: {},
    input: {
        color: '#000',
        opacity: '0.7',
        marginBottom: '10px',
    },
    underline: {
        color: 'black',
        '&::before': {
            color: 'white',
        },
    },
    button: {
        color: '#000',

        '&:disabled': {
            color: 'grey',
        },
    },
    clearButton: {
        top: '96%',
        position: 'sticky!important',
        zIndex: '1',

        '&:disabled': {
            color: 'grey',
            backgroundColor: '#424242',
        },
    },

}));

export default function ActionAddComponent() {
    const classes = useStyles();
    const handleChange = (value)=>{

    }
    return (
        <div className='column left'>
            <FormControl
                fullWidth={true}
                formlabellasses={{
                    root: classes.cssLabel,
                }}
            >
                <Grid container alignItems='baseline' align='stretch'>
                    <Grid item xs={10}>
                        <TextField
                            id='title-input'
                            label='Thêm mới Component'
                            placeholder='Nhập Tên Component'
                            margin='normal'
                            autoFocus
                            onChange={console.log("abc")}
                            onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                    // Do code here
                                    // this.handleAddComponent();
                                    // ev.preventDefault();
                                }
                            }}
                            value={""}
                            name='componentName'
                            className={classes.light}
                            InputProps={{
                                className: classes.input,
                            }}
                            InputLabelProps={{
                                className: classes.input,
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant='fab'
                            mini
                            color='primary'
                            className={classes.button}
                            aria-label='Add'
                            onClick={console.log("add")}
                            disabled= {false}
                        >
                            <AddIcon />
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
            <div className='expansionPanel'>
               ///
            </div>
            <Button
                color='secondary'
                aria-label='Delete All'
                variant='contained'

                disabled={false}
                className={classes.clearButton}
            >
                Clear workspace
            </Button>
        </div >
    );
}