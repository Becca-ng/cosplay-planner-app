import { LandingPage, WorkSpace } from "../views/viewsIndex"

import { Route, Routes } from 'react-router-dom';



const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="projects" element={<WorkSpace />}>
                    <Route path=":projectId" element={<p> FORM PAGE </p>} />
                </Route>
            </Routes>
        </main>
    )
};

export default Main;