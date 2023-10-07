import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <div className='w-full'>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
