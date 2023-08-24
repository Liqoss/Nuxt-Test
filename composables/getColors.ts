export const getColors = (route : String) => {
  let theme = ''
  route === 'index' ? theme = 'dark' : theme = 'light'

  switch (theme) {
    case 'dark': {
      return {
        color: 'white',
        bgColor: 'black'
      }
    }
    case 'light': {
      return {
        color: 'black',
        bgColor: 'white'
      }
    }
    default: {
      return {
        color: 'white',
        bgColor: 'black'
      }
    }
  }
}
