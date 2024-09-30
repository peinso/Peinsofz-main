
export default async function GetAllServices() {
    const res = await fetch('https://piensofz.com/public/api/services', {
        next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
