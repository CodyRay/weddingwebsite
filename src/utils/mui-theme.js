import { createMuiTheme } from '@material-ui/core/es/styles'

export const colors = {
  blue: '#02224e',
  silver: '#abb4b9',
  blackish: '#090c08',
  darkpurple: '#474056',
  lightpurple: '#757083',
}

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      light: colors.lightpurple,
      main: colors.darkpurple,
    },
  },
})
