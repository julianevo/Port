import { createContext } from 'react'

export const themes = {
    dark: {
        color: '#FFF',
        background: '#121212'
    },
    light: {
        color: '#121212',
        background: '#FFF'
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext