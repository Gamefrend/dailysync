export default function a({params}: {
    params: { id: string }
}) {
    return <div>Hallo, {params.id}</div>
}