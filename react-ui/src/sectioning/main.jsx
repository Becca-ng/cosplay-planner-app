import { LandingPage, WorkSpace } from "../views/viewsIndex"
import { Route, Routes } from 'react-router-dom';
import NewProjectForm from "../components/newProjectForm";



const Main = () => {



    return (
        <>
<link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&display=swap" rel="stylesheet"/> 
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="projects" element={<WorkSpace />}>
                    <Route path=":projectId" element={<p> FORM PAGE </p>} />
                </Route>
            </Routes>
        </>
    )
};

export default Main;