import React from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from './components/Home'

const useStyles = makeStyles({
  root: {}
})

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#648DAE'
      },
    }
  })

  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
