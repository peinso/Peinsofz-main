import axios from "axios"
export default async function postContact() {
    const res = await axios.post('https://piensofz.com/public/api/message')
    if (!res.ok) throw new Error(res.statusText)

    return res

}
