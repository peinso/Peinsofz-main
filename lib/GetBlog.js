
export default async function GetBlog(id) {
    const res = await fetch(`https://piensofz.com/public/api/blogsingle?id=${id}`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return data
}
