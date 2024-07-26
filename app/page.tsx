import Link from "next/link";

export default async function Home() {

    //const respons = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}");
    return (
        <>
            <div>Hello, World!</div>
            <Link href="/a">Go to German Site</Link>
        </>
    );
}
