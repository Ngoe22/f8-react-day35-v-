import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router";

// Pages
import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Buttons from "../../pages/Buttons";

function AppRoutes() {
    return (
        <HashRouter>
            {/* <Navigation></Navigation> */}

            <Routes>
                {/* <Route path="/" element={<Home></Home>} />
                <Route path="/news" element={<News></News>} />
                <Route path="/contact" element={<Contact></Contact>} /> */}
                <Route path="/" element={<Buttons></Buttons>} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
