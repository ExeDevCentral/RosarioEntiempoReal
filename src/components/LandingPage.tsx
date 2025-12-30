import React from 'react';
import { Link } from 'react-router-dom';
import { WeatherWidget, TransportWidget, ServiceStatusWidget } from './DashboardWidgets';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - Dashboard Style */}
            <div className="relative overflow-hidden bg-slate-900 pb-12">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="images/rosario-bg.png"
                        alt="Rosario Skyline"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="lg:flex lg:items-center lg:justify-between mb-12">
                        <div className="max-w-xl animate-slide-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-4 text-shadow-lg">
                                <span className="block xl:inline">Rosario,</span>{' '}
                                <span className="block text-blue-400 xl:inline">En Tiempo Real</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl font-light">
                                Panel urbano inteligente. Estado del transporte, clima y servicios al instante.
                            </p>
                        </div>

                        {/* Weather Widget (Hero Highlight) */}
                        <div className="mt-8 lg:mt-0 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                            <WeatherWidget />
                        </div>
                    </div>

                    {/* Dashboard Widgets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <TransportWidget />
                        <ServiceStatusWidget />

                        {/* Quick News Highlight Widget */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between">
                            <div>
                                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="text-xl">📰</span> Último Momento
                                </h3>
                                <p className="font-semibold text-gray-800">Inauguran nuevo centro cultural...</p>
                                <p className="text-sm text-gray-500 mt-1">Hace 2 horas</p>
                            </div>
                            <Link to="/news" className="text-blue-600 font-medium text-sm mt-4 hover:underline">Ver todas las noticias →</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Grid (Quick Links) */}
            <div className="py-12 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Accesos Rápidos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Explorar Servicios
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <FeatureCard
                            title="Noticias"
                            description="Actualidad local"
                            link="/news"
                            color="bg-blue-500"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />}
                        />
                        <FeatureCard
                            title="Cine"
                            description="Cartelera y horarios"
                            link="/cinema"
                            color="bg-purple-500"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />}
                        />
                        <FeatureCard
                            title="Cocheras"
                            description="Estacionamiento"
                            link="/parking"
                            color="bg-green-500"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />}
                        />
                        <FeatureCard
                            title="Hoteles"
                            description="Alojamiento"
                            link="/hotels"
                            color="bg-orange-500"
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FeatureCardProps {
    title: string;
    description: string;
    link: string;
    color: string;
    icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, link, color, icon }) => (
    <Link to={link} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 flex items-center space-x-4">
        <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg ${color} text-white`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {icon}
            </svg>
        </div>
        <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-lg font-medium text-gray-900">{title}</p>
            <p className="text-sm text-gray-500 truncate">{description}</p>
        </div>
        <div className="flex-shrink-0 self-center">
            <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </div>
    </Link>
);

export default LandingPage;
