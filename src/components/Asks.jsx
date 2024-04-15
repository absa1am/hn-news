import axios from "axios";
import { useEffect, useState } from "react";
import Board from "./Board";

export default function Asks() {
    const [loading, setLoading] = useState(true);
    const [asks, setAsks] = useState([]);
    const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn");

    useEffect(() => {
        const fetchAsks = async () => {
            try {
                const response = await axios.get(url);

                setAsks(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching asks: ", error);
            }
        }

        fetchAsks();
    }, [url]);

    const handleSearch = (value) => {
        if (value === "popularity") {
            setUrl("https://hn.algolia.com/api/v1/search?tags=ask_hn&numericFilters=points>0");
        } else if (value === "date") {
            setUrl("https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn");
        }
    }

    return (
        <Board loadingId={loading} loadingTask={loading} data={asks} boardTitle={"Asks"} handleSearch={handleSearch} />
    );
}
