
export default async function getHow() {

    const res = await fetch('https://piensofz.com/public/api/howWeWork')
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
