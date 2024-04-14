import axios from "axios";
import { useEffect, useState } from "react";
import Board from "./Board";

export default function Asks() {
    const [loading, setLoading] = useState(true);
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        let url = `http://hn.algolia.com/api/v1/search_by_date?tags=ask_hn`;

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
    }, []);

    return (
        <Board loadingId={loading} loadingTask={loading} data={asks} boardTitle={"Asks"} />
    );
}
