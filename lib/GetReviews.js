
export default async function GetReviews() {
    const res = await fetch('https://piensofz.com/public/api/reviews')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data
}
