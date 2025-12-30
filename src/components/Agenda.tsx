import React from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    category: 'Música' | 'Teatro' | 'Danza' | 'Infantil' | 'Otros';
    description?: string;
}

const events: Event[] = [
    {
        id: 1,
        title: "ARZENICO",
        date: "Hoy, 30 de Diciembre",
        time: "21:00 hs",
        location: "Beatmemo",
        category: "Música",
        image: "https://placehold.co/600x400/1e293b/white?text=Arzenico"
    },
    {
        id: 2,
        title: "Solo como una perra",
        date: "Sábado 3 de Enero",
        time: "21:00 hs",
        location: "Teatro Broadway",
        category: "Teatro",
        description: "Unipersonal de Juan Pablo Geretto.",
        image: "https://placehold.co/600x400/9d174d/white?text=Solo+como+una+perra"
    },
    {
        id: 3,
        title: "La Revista está de Fiesta",
        date: "Viernes 9 de Enero",
        time: "21:00 hs",
        location: "Teatro Broadway",
        category: "Teatro",
        image: "https://placehold.co/600x400/be123c/white?text=La+Revista"
    },
    {
        id: 4,
        title: "El Corsario (Ballet)",
        date: "Próximamente",
        time: "20:00 hs",
        location: "Teatro El Círculo",
        category: "Danza",
        image: "https://placehold.co/600x400/0f172a/white?text=El+Corsario"
    },
    {
        id: 5,
        title: "Guerreras Doradas",
        date: "20 de Febrero",
        time: "18:00 hs",
        location: "Teatro Broadway",
        category: "Infantil",
        image: "https://placehold.co/600x400/ca8a04/white?text=Guerreras+Doradas"
    }
];

const Agenda: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        Agenda Cultural
                    </h1>
                    <p className="mt-4 text-xl text-slate-600">
                        Descubrí los mejores eventos de Rosario.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100 flex flex-col">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                                    {event.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="text-sm font-semibold text-blue-600 mb-1">{event.date}</p>
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{event.title}</h3>
                                    </div>
                                </div>

                                {event.description && (
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                                )}

                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center text-slate-500 text-sm mb-2">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        {event.location}
                                    </div>

                                    <button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded transition-colors text-sm">
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agenda;
