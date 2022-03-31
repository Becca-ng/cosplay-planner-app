import { LandingPage, WorkSpace } from "../views/viewsIndex"
import { Route, Routes } from 'react-router-dom';
import NewProjectForm from "../components/newProjectForm";



const Main = () => {



    return (
        <main className = "workSpaceGrid navBarSpace projectSpace">
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