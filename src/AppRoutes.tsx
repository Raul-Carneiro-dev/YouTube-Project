import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { UserStore } from "./contexts/openmenu";
import { UserStorage } from "./context/userContext";
import Register from "./pages/register";
import RegisterVideos from "./pages/registerVideos";


const AppRoutes = () => {

    return (
        <Router>
            <UserStorage>
                <UserStore>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/registervideos" element={<RegisterVideos />} />
                    </Routes>
                </UserStore>
            </UserStorage>
        </Router>
    )
}

export default AppRoutes;