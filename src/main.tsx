import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { Provider } from "./components/ui/provider"
import Router from './app/routes/Router';
// import '@fontsource-variable/comfortaa/index.css';

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
    <StrictMode>
        <Provider>
                <Router/>
        </Provider>
  </StrictMode>
)
