import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archive' element={<Archive />} />
    </Routes>    
  );
}

export default App;
