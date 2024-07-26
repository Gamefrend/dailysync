import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { latitude, longitude } = await request.json();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`);

    if (!response.ok) {
        return NextResponse.json(Error(response.statusText));
    }

    return NextResponse.json(await response.json());
}