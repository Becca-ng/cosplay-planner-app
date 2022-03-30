import { Header , Main, Footer } from './sectioning/sectioningIndex';
import "./App.css";
import NavigationBar from "./sectioning/projectNavBar";

function App() {

  //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  async function callAPI(){
    await fetch('https://fast-tor-11029.herokuapp.com/https://l80b9v6lai.execute-api.us-east-1.amazonaws.com/Prod')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch(console.log)
  }

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
