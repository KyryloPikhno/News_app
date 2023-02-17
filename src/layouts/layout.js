import {Outlet} from "react-router-dom";

import css from './layout.module.css';
import {Footer, Header} from "../components";

const Layout = () => {


    return (
        <div className={css.container}>
            <div className={css.block}>
                <Header/>
            </div>
            <div className={css.block}>
                <Outlet/>
            </div>
            <div className={css.block}>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};