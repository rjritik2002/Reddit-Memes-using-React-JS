import axios from "axios";

export const getMemes = async () => {
    const API_URL = "https://www.reddit.com/r/memes.json";

    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return(response.data);
    } catch (error) {
        console.log("Error while callig API", error.message);
        return error.response;
    }
}