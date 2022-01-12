import './App.css';
import { NavBar } from './pages/profile/header/NavBar';
import { Section } from './pages/profile/section/Section';

function App() {
  return (
    <div className='container-grid'>
        <div className="container-header">
          <NavBar/>
        </div>
        <div className="container-section">
          <Section />
        </div>
        <div className="container-footer">
           footers
        </div>
    </div>
  );
}

export default App;
