import { LandingPage, WorkSpace } from "../views/viewsIndex"
import { Route, Routes } from 'react-router-dom';
import NewProjectForm from "../components/newProjectForm";



const Main = () => {



    return (
        <main>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="projects" element={<WorkSpace />}>
                    <Route path=":projectId" element={<p> FORM PAGE </p>} />
                    <Route path="new_project_form" element={<NewProjectForm />} />
                </Route>
            </Routes>
        </main>
    )
};

export default Main;