import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./Board";

export default function Shows({ category }) {
    const [loading, setLoading] = useState(true);
    const [shows, setShows] = useState([]);
    const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search_by_date?tags=show_hn");

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get(url);

                setShows(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching shows: ", error);
            }
        }

        fetchShows();
    }, [url]);

    const handleSearch = (value) => {
        if (value === "popularity") {
            setUrl("https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=points>0")
        } else if (value === "date") {
            setUrl("https://hn.algolia.com/api/v1/search_by_date?tags=show_hn");
        }
    }

    return (
        <Board loadingId={loading} laodingTask={false} data={shows} boardTitle={"Shows"} handleSearch={handleSearch} />
    );
}
