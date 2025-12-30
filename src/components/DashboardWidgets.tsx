import React from 'react';

// --- Weather Widget ---
export const WeatherWidget: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform cursor-default">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-blue-100 font-medium">Clima Actual</p>
                    <h3 className="text-4xl font-bold mt-1">24°C</h3>
                    <p className="text-blue-100 mt-1">Soleado</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="mt-6 flex justify-between text-sm text-blue-100">
                <span>H: 60%</span>
                <span>V: 12km/h</span>
            </div>
        </div>
    );
};

// --- Transport Widget ---
export const TransportWidget: React.FC = () => {
    const status = [
        { name: "Subte A", status: "Normal", color: "bg-green-500" },
        { name: "Subte B", status: "Demoras", color: "bg-yellow-500" },
        { name: "Tren Mitre", status: "A tiempo", color: "bg-green-500" },
        { name: "Bus 152", status: "Normal", color: "bg-green-500" },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">🚆</span> Estado de Transporte
            </h3>
            <div className="space-y-3">
                {status.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">{item.name}</span>
                        <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                            <span className="text-sm font-semibold text-gray-700">{item.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Service Status Widget ---
export const ServiceStatusWidget: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">⚡</span> Servicios Públicos
            </h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-green-600 font-bold mb-1">Luz</div>
                    <div className="text-xs text-green-800 bg-green-200 px-2 py-0.5 rounded-full inline-block">Normal</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-blue-600 font-bold mb-1">Agua</div>
                    <div className="text-xs text-green-800 bg-green-200 px-2 py-0.5 rounded-full inline-block">Normal</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-orange-600 font-bold mb-1">Gas</div>
                    <div className="text-xs text-green-800 bg-green-200 px-2 py-0.5 rounded-full inline-block">Normal</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                    <div className="text-purple-600 font-bold mb-1">Internet</div>
                    <div className="text-xs text-yellow-800 bg-yellow-200 px-2 py-0.5 rounded-full inline-block">Intermitente</div>
                </div>
            </div>
        </div>
    );
};
