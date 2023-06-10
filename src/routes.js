import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import Home from "./pages/home";

function RouteApp (){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
            <ToastContainer/>
        </Router>
    )
}

export default RouteApp;