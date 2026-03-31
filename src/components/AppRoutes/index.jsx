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
import Counter from "../../pages/Counter";
import Products from "../../pages/Products";
import Profile from "../../pages/Profile";
import Weather from "../../pages/Weather";
import Todo from "../../pages/Todo";

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
                <Route path="/counter" element={<Counter></Counter>} />
                <Route
                    path="/products"
                    element={
                        <Products api="https://jsonplaceholder.typicode.com/posts?_limit=12"></Products>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Profile api="https://jsonplaceholder.typicode.com/users/1"></Profile>
                    }
                />

                <Route path="/weather" element={<Weather></Weather>} />
                <Route path="/todo" element={<Todo></Todo>} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
