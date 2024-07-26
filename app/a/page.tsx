'use client'
import {useEffect, useState} from "react";

export default function A() {
    const [location, setLocation] = useState<{ latitude: number, longitude: number }>({latitude: 0, longitude: 0});
    const [error, setError] = useState("");

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

    return (
        <>
            <div>Hallo, Welt</div>
            <div> Ich doxe mich kurz {location.latitude} / {location.longitude}</div>
        </>
    )
}