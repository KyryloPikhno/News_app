import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage, NewsPage, NotFoundPage, ProfilePage} from "./pages";
import {Layout} from "./layouts";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {/*<Route index element={<Navigate to={'/'}/>}/>*/}
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/news'} element={<NewsPage/>}/>
                {/*<Route element={<PrivateRoute/>}>*/}
                <Route path={'/profile'} element={<ProfilePage/>}/>
                {/*</Route>*/}
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}


export default App;
