import React from "react";
import { BrowserRouter } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Routes>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </Routes>
            </ul>
        </nav>
    );
}

export default NavBar;