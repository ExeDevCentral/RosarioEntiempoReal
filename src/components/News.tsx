import React from 'react';

interface NewsItem {
    id: number;
    title: string;
    category: string;
    date: string;
    summary: string;
    imageUrl: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Inauguración del Nuevo Centro Cultural",
        category: "Cultura",
        date: "29 Dic, 2024",
        summary: "La ciudad celebra la apertura del nuevo espacio dedicado al arte y la música local, con instalaciones de última generación.",
        imageUrl: "https://placehold.co/600x400/2563eb/white?text=Centro+Cultural"
    },
    {
        id: 2,
        title: "Mejoras en el Transporte Público",
        category: "Servicios",
        date: "28 Dic, 2024",
        summary: "Se incorporan nuevas unidades ecológicas a la flota de autobuses urbanos para mejorar la frecuencia y reducir emisiones.",
        imageUrl: "https://placehold.co/600x400/16a34a/white?text=Transporte"
    },
    {
        id: 3,
        title: "Festival Gastronómico de Verano",
        category: "Eventos",
        date: "27 Dic, 2024",
        summary: "Este fin de semana llega el festival que reúne a los mejores chefs y food trucks de la región en el parque central.",
        imageUrl: "https://placehold.co/600x400/ea580c/white?text=Festival"
    },
    {
        id: 4,
        title: "Nuevas Ciclovías en el Centro",
        category: "Infraestructura",
        date: "26 Dic, 2024",
        summary: "El plan de movilidad sustentable avanza con 5km de nuevas ciclovías conectando los puntos principales de la ciudad.",
        imageUrl: "https://placehold.co/600x400/9333ea/white?text=Ciclovias"
    },
    {
        id: 5,
        title: "Feria de Emprendedores",
        category: "Economía",
        date: "25 Dic, 2024",
        summary: "Más de 50 emprendedores locales expondrán sus productos este sábado en la plaza mayor. Entrada libre y gratuita.",
        imageUrl: "https://placehold.co/600x400/db2777/white?text=Feria"
    },
    {
        id: 6,
        title: "Campaña de Vacunación",
        category: "Salud",
        date: "24 Dic, 2024",
        summary: "Comienza la campaña anual de vacunación antigripal en todos los centros de salud municipales.",
        imageUrl: "https://placehold.co/600x400/0891b2/white?text=Salud"
    }
];

const News: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Noticias Locales
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Mantenete informado con lo último que pasa en tu ciudad.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((item) => (
                        <article key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-blue-600">
                                        {item.category}
                                    </p>
                                    <a href="#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{item.summary}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="text-sm text-gray-500">
                                        <time dateTime={item.date}>{item.date}</time>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
