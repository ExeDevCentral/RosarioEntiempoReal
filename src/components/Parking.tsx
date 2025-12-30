import React from 'react';

interface ParkingSpot {
    id: number;
    name: string;
    address: string;
    closingTime: string;
    isOpen: boolean;
    pricePerHour: number;
}

const parkings: ParkingSpot[] = [
    { id: 1, name: "Estacionamiento Central", address: "Av. San Martín 123", closingTime: "23:00", isOpen: true, pricePerHour: 1500 },
    { id: 2, name: "Cochera Plaza", address: "Calle 9 de Julio 450", closingTime: "22:00", isOpen: true, pricePerHour: 1200 },
    { id: 3, name: "Parking Norte", address: "Belgrano 890", closingTime: "20:00", isOpen: false, pricePerHour: 1000 },
    { id: 4, name: "Estación Terminal", address: "Mitre 200", closingTime: "24Hs", isOpen: true, pricePerHour: 1800 },
];

const Parking: React.FC = () => {
    // Helper to determine status color/text
    const getStatusInfo = (isOpen: boolean, closingTime: string) => {
        if (!isOpen) return { text: 'Cerrado', color: 'bg-red-100 text-red-800' };
        if (closingTime === '24Hs') return { text: 'Abierto 24Hs', color: 'bg-green-100 text-green-800' };
        return { text: `Cierra a las ${closingTime}`, color: 'bg-green-100 text-green-800' };
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Cocheras y Estacionamiento</h1>

                <div className="grid gap-6">
                    {parkings.map(parking => {
                        const status = getStatusInfo(parking.isOpen, parking.closingTime);
                        return (
                            <div key={parking.id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-bold text-gray-900">{parking.name}</h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                                            {status.text}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 mt-1">{parking.address}</p>
                                    <p className="text-gray-700 font-medium mt-1">${parking.pricePerHour} / hora</p>
                                </div>
                                <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded transition-colors">
                                    Ver Mapa
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Parking;
