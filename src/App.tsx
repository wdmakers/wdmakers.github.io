import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jun2023 from './pages/newsletters/Jun2023';
import Archive from './pages/Archive';
import Q12025 from './pages/newsletters/Q12025';
import December2025 from './pages/newsletters/December2025';
import { AudioPlayerProvider } from './contexts/AudioPlayerProvider';
import DynamicTitle from './components/DynamicTitle';

function App() {
  return (
    <AudioPlayerProvider>
      <BrowserRouter>
        <DynamicTitle/>
        <Routes>
          <Route path="/june2023" element={<Jun2023 />} />
          <Route path="/q12025" element={<Q12025 />} />
          <Route path="/december2025" element={<December2025 />} />

          <Route path="/" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </AudioPlayerProvider>
  );
}

export default App;
