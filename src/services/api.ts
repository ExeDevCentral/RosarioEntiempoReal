// src/services/api.ts

// Interfaces
export interface WeatherData {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
}

export interface TransportStatus {
    line: string;
    status: 'Normal' | 'Demorado' | 'Interrumpido';
    type: 'bus' | 'subway' | 'train';
}

// Mock Data (Placeholder until Keys are provided)
export const mockWeather: WeatherData = {
    temp: 24,
    condition: 'Soleado',
    humidity: 60,
    windSpeed: 12
};

export const mockTransport: TransportStatus[] = [
    { line: '110', status: 'Normal', type: 'bus' },
    { line: '122 Verde', status: 'Demorado', type: 'bus' },
    { line: '133 Negra', status: 'Normal', type: 'bus' },
    { line: 'K', status: 'Normal', type: 'bus' }, // Linea electrica de Rosario
    { line: 'Q', status: 'Interrumpido', type: 'bus' }, // Trolebus
];

// Service Functions
export const api = {
    getWeather: async (): Promise<WeatherData> => {
        // TODO: Replace with fetch to OpenWeatherMap
        return new Promise(resolve => setTimeout(() => resolve(mockWeather), 500));
    },
    getTransportStatus: async (): Promise<TransportStatus[]> => {
        // TODO: Replace with fetch to Mobility API
        return new Promise(resolve => setTimeout(() => resolve(mockTransport), 500));
    }
};
