import axios from "axios";

export default async function GetAllProjects() {
    try {
        const response = await axios.get('https://piensofz.com/public/api/projects');
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error; // Throw the error to be handled by the caller
    }
}