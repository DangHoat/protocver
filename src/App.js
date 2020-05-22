import React from 'react';
import Main from './containers/Main'
import { MuiThemeProvider } from '@material-ui/core/styles';
import  theme from './style/theme'
import './style/App.css';

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <div className="app">
              <Main/>
          </div>

      </MuiThemeProvider>
  );
}
export default App;
