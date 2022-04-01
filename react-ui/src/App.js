import { Header , Main, Footer } from './sectioning/sectioningIndex';
import "./App.css";
import NavigationBar from "./sectioning/projectNavBar";

function App() {
  return (
    <div className = "projectBody">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
