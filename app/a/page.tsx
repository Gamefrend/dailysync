'use client'
import {useEffect, useState} from "react";

export default function A() {
    const [location, setLocation] = useState<{ latitude: number, longitude: number }>({latitude: 0, longitude: 0});
    const [error, setError] = useState("");
    const [data, setData] = useState<any>(null);


    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not available");
        }
    }, []);

    useEffect(() => {
        if (location.latitude !== 0 && location.longitude !== 0) {
            // Send location data to the server
            fetch('../../api/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({latitude: location.latitude, longitude: location.longitude}),
            })
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }, [location]);

    if (error) {
        return error
    } else {
        console.log(data)
        return (
            <div>
                <div>Hallo, Welt</div>
                <div>Ich doxe mich kurz {location.latitude} / {location.longitude}</div>
                {data && <div>{JSON.stringify(data)}</div>}
            </div>
        );
    }
}