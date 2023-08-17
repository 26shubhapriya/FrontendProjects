import './App.css';
import ListItems from './components/ListItems';
import { AppContext } from './context/AppContext';


const App = () => {
  return (
    <>
    <AppContext>
    <ListItems />
    </AppContext>
     
    </>
  );
}

export default App;
