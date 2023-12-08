const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "M2bkVqHqNykPk38v88FAOIaxPc5Db2qpgkeSCB6E";
const API_URL_DEMO = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

export default async (urlParams?: string) => {
   try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}${typeof urlParams !== "undefined" && urlParams?.length > 0 ? urlParams : ""}`);

      const data = await response.json();

      return Promise.resolve(data)

   } catch (error) {
      return Promise.reject(error)
   }
}

