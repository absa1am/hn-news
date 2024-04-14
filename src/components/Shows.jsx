import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./Board";

export default function Shows({ category }) {
    const [loading, setLoading] = useState(true);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        let url = `https://hn.algolia.com/api/v1/search_by_date?tags=show_hn`;

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
    }, []);

    return (
        <Board loadingId={loading} laodingTask={false} data={shows} boardTitle={"Shows"} />
    );
}
