import './App.css';
import Frame from "./components/Frame";
import menuItems from "./menuItems";

function getPage() {
    let page = "not-found";
    let url = window.location.search;
    let queryParams = url.substring(url.lastIndexOf('?') + 1).split('&')
    queryParams.forEach((item)=>{
        let key = item.split('=')[0];
        let value = item.split('=')[1];
        if (key === 'page') {
            page = value;
        }
    })
    return page;
}
function App() {

    let pageName = getPage();
    let pageComponent = menuItems.find((item)=>item.link === pageName);

  return (
    <div className="App">
        <Frame>
            {(pageComponent)?pageComponent.page: <h1>Not Found</h1>}
        </Frame>
    </div>
  );
}

export default App;
