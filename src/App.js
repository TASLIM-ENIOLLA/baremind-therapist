import './App.css';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import TherapistDashboard from './pages/TherapistDashboard';


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<TherapistDashboard/>} />
    </Routes>
  );
}

export default App;
