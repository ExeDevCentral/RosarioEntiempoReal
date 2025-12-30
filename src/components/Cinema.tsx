import React from 'react';

interface Movie {
    id: number;
    title: string;
    genre: string;
    rating: string;
    duration: string;
    times: string[];
    imageUrl: string;
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Avatar: Fuego y Cenizas",
        genre: "Ciencia Ficción / Aventura",
        rating: "PG-13",
        duration: "3h 10m",
        times: ["15:00", "18:45", "22:30"],
        imageUrl: "https://placehold.co/300x450/1e293b/white?text=Avatar+Fire+and+Ash"
    },
    {
        id: 2,
        title: "Zootopia 2",
        genre: "Animación / Aventura",
        rating: "ATP",
        duration: "1h 45m",
        times: ["14:00", "16:15", "18:30"],
        imageUrl: "https://placehold.co/300x450/ea580c/white?text=Zootopia+2"
    },
    {
        id: 3,
        title: "Mads: Terror en tiempo real",
        genre: "Terror / Thriller",
        rating: "R",
        duration: "1h 30m",
        times: ["20:00", "22:00", "00:00"],
        imageUrl: "https://placehold.co/300x450/7f1d1d/white?text=Mads"
    },
    {
        id: 4,
        title: "Anaconda",
        genre: "Comedia / Acción",
        rating: "PG-13",
        duration: "1h 50m",
        times: ["17:00", "19:30", "22:00"],
        imageUrl: "https://placehold.co/300x450/14532d/white?text=Anaconda"
    },
    {
        id: 5,
        title: "Megadeth: Behind the Mask",
        genre: "Documental / Música",
        rating: "PG-13",
        duration: "2h 00m",
        times: ["21:00"],
        imageUrl: "https://placehold.co/300x450/000000/white?text=Megadeth"
    },
    {
        id: 6,
        title: "Five Nights at Freddy's 2",
        genre: "Terror",
        rating: "PG-13",
        duration: "1h 55m",
        times: ["16:30", "19:00", "21:30"],
        imageUrl: "https://placehold.co/300x450/581c87/white?text=FNAF+2"
    }
];

const Cinema: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Cartelera de Cine
                    </h1>
                    <p className="mt-4 text-xl text-blue-300">
                        Los mejores estrenos, hoy en tu ciudad.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border border-slate-700">
                            <div className="aspect-[2/3] w-full relative">
                                <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">
                                    {movie.rating}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
                                <p className="text-sm text-slate-400 mb-3">{movie.genre} • {movie.duration}</p>

                                <div className="space-y-3">
                                    <p className="text-sm font-medium text-slate-300">Horarios:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {movie.times.map((time, idx) => (
                                            <span key={idx} className="px-2 py-1 rounded bg-slate-700 text-blue-400 text-sm border border-slate-600 hover:bg-slate-600 cursor-pointer transition-colors">
                                                {time}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                                    Comprar Entradas
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cinema;
