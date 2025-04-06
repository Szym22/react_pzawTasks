import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;