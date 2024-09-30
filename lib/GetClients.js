import axios from "axios";

export default async function GetClients() {
    const res = await fetch('https://piensofz.com/public/api/clients', {
        next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
