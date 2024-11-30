import './App.css';
import Working from "./components/TodoWorking"
function App() {
  // const [edit,setEdit]=useState(false);
  return (
    <>
        <div class="Div">
          <h1 className="text-3xl font-bold underline ">Today Task</h1>
          <div >
            <h1 className="text-2xl font-bold" >Pending</h1>
            <Working/>
          </div>
        </div>
      </>
      );
}

      export default App;
