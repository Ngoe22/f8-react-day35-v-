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
import Buttons from "../../pages/Buttons";
import Comments from "../../pages/Comments";

function AppRoutes() {
    return (
        <HashRouter>
            {/* <Navigation></Navigation> */}

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/buttons" element={<Buttons></Buttons>} />
                <Route
                    path="/comments"
                    element={
                        <Comments api="https://jsonplaceholder.typicode.com/comments?postId=1"></Comments>
                    }
                />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
