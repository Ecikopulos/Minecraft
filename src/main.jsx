import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home.jsx'
import GlobalStyles from "./assets/styles/GlobalStyles.jsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./assets/styles/Theme.jsx";
import Navigation from "./views/Navigation/Navigation.jsx";
import Header from "./views/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Navigation/>
            <Header/>
            <Home/>
        </ThemeProvider>
    </React.StrictMode>,
)
