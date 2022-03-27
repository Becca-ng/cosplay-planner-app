import { Header , Main, Footer } from './sectioning/sectioningIndex';
import "./App.css";
import NavigationBar from "./sectioning/projectNavBar";

function App() {
  return (
    <>
    <div className="sideNav">
      <NavigationBar />
    <div className="project_workspace">
      <Header />
      <Main />
      <Footer />
    </div>
    </div>

   
    </>
  );
}

export default App;
