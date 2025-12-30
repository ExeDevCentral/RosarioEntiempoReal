import React from 'react';

interface Hotel {
    id: number;
    name: string;
    type: 'Hotel' | 'Hostel' | 'Apart';
    stars: number;
    image: string;
    pricePerNight: number;
    location: string;
}

const hotels: Hotel[] = [
    { id: 1, name: "Grand Hotel Ciudad", type: "Hotel", stars: 5, pricePerNight: 85000, location: "Centro", image: "https://placehold.co/600x400/1e1e1e/white?text=Grand+Hotel" },
    { id: 2, name: "Hostel del Sol", type: "Hostel", stars: 3, pricePerNight: 25000, location: "Barrio Histórico", image: "https://placehold.co/600x400/d97706/white?text=Hostel+Sol" },
    { id: 3, name: "Suites & Spa", type: "Hotel", stars: 4, pricePerNight: 60000, location: "Zona Norte", image: "https://placehold.co/600x400/0f766e/white?text=Suites+Spa" },
    { id: 4, name: "Backpackers Point", type: "Hostel", stars: 2, pricePerNight: 18000, location: "Cerca Terminal", image: "https://placehold.co/600x400/b45309/white?text=Backpackers" },
];

const Hotels: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Hoteles y Alojamientos</h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {hotels.map(hotel => (
                        <div key={hotel.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-96">
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <span className="inline-block px-2 py-1 bg-blue-600 rounded text-xs font-semibold mb-2">{hotel.type}</span>
                                        <h3 className="text-2xl font-bold">{hotel.name}</h3>
                                    </div>
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: hotel.stars }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm mb-4"><span className="mr-1">📍</span>{hotel.location}</p>

                                {/* Hidden Price Section - Appears on Hover */}
                                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="pt-4 border-t border-white/20">
                                        <p className="text-sm text-gray-400">Precio por noche desde:</p>
                                        <p className="text-3xl font-bold text-green-400">${hotel.pricePerNight.toLocaleString()}</p>
                                        <button className="mt-3 w-full bg-white text-slate-900 py-2 rounded font-bold hover:bg-gray-200 transition-colors">
                                            Reservar Ahora
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotels;
