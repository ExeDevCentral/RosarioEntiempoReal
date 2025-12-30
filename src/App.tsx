import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import News from './components/News';
import Cinema from './components/Cinema';
import Parking from './components/Parking';
import Hotels from './components/Hotels';
import LocalInfo from './components/LocalInfo';
import Agenda from './components/Agenda';

// Imports from original App.js
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Register from './components/Register';
import Ticket from './components/Ticket';
import Waiter from './components/Waiter';

const AppContent: React.FC = () => {
    const location = useLocation();
    // Hide navbar for admin/auth routes if desired, or keep it depending on usage.
    // For now, we'll keep it everywhere except maybe pure Admin if layout conflicts, 
    // but the original AdminPanel probably has its own layout. 
    // We will render Navbar mostly for public facing pages.
    const isAdminRoute = location.pathname.startsWith('/admin') ||
        ['/login', '/register', '/ticket', '/waiter'].includes(location.pathname);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {!isAdminRoute && <Navbar />}
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/info" element={<LocalInfo />} />
                <Route path="/agenda" element={<Agenda />} />

                {/* Legacy/Admin Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/ticket" element={<Ticket />} />
                <Route path="/waiter" element={<Waiter />} />
                <Route path="/admin/*" element={<AdminPanel currentUser={{ role: 'ADMIN' as any, permissions: [], fullName: 'Admin User' }} />} />

                {/* Fallback for AdminPanel which might handle its own sub-routes or was catch-all */}
                <Route path="/*" element={<AdminPanel currentUser={{ role: 'ADMIN' as any, permissions: [], fullName: 'Admin User' }} />} />
            </Routes>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
