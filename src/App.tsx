import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Stats from './components/Dashboard/Stats';

function DashboardContent() {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Stats />
          {/* Additional dashboard components will be added here */}
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            {/* Additional routes will be added here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}