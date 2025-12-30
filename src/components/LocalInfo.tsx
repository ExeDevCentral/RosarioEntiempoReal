import React from 'react';

const LocalInfo: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 bg-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center">Información Útil de la Ciudad</h1>
                    </div>
                </div>
                <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Teléfonos de Emergencia</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                    <span className="font-medium text-red-700">Emergencias Médicas</span>
                                    <span className="font-bold text-red-700 text-xl">107</span>
                                </li>
                                <li className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <span className="font-medium text-blue-700">Policía</span>
                                    <span className="font-bold text-blue-700 text-xl">911</span>
                                </li>
                                <li className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                    <span className="font-medium text-orange-700">Bomberos</span>
                                    <span className="font-bold text-orange-700 text-xl">100</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Servicios Municipales</h2>
                            <ul className="space-y-3">
                                <li className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <strong className="block text-gray-900">Recolección de Residuos</strong>
                                    <span className="text-sm text-gray-600">Domingo a Viernes, a partir de las 20hs</span>
                                </li>
                                <li className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <strong className="block text-gray-900">Atención al Vecino</strong>
                                    <span className="text-sm text-gray-600">Lunes a Viernes de 8:00 a 14:00hs</span>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <div className="border-t border-gray-200 my-4"></div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cotización del Dólar</h2>
                            <ul className="space-y-3">
                                <li className="flex flex-col p-4 bg-green-50 rounded-lg border border-green-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-green-900 text-lg">Dólar Blue</span>
                                        <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">Informal</span>
                                    </div>
                                    <div className="flex justify-between text-green-800 text-sm">
                                        <div className="flex flex-col">
                                            <span className="text-green-600 font-medium">Compra</span>
                                            <span className="text-xl font-bold">$1.510,00</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-green-600 font-medium">Venta</span>
                                            <span className="text-xl font-bold">$1.530,00</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-right">
                                        <span className="text-[10px] text-green-600 opacity-75">Actualizado: 30/12/2025</span>
                                    </div>
                                </li>
                                <li className="flex flex-col p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-slate-900 text-lg">Dólar Oficial (BNA)</span>
                                        <span className="text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full">Banco Nación</span>
                                    </div>
                                    <div className="flex justify-between text-slate-800 text-sm">
                                        <div className="flex flex-col">
                                            <span className="text-slate-500 font-medium">Compra</span>
                                            <span className="text-xl font-bold">$1.425,00</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-slate-500 font-medium">Venta</span>
                                            <span className="text-xl font-bold">$1.475,00</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transporte</h2>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 h-full">
                                <p className="text-blue-900 mb-2 font-medium">Consulta de saldo y recorridos</p>
                                <p className="text-sm text-blue-700 mb-4">Utiliza la app oficial Movi Rosario para ver cuándo llega tu colectivo.</p>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors text-sm">
                                    Ver Estado del Transito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalInfo;
