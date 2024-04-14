import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./Board";

export default function News({ category }) {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        let url = `http://hn.algolia.com/api/v1/search_by_date?tags=(story,polls)`;

        const fetchNews = async () => {
            try {
                const response = await axios.get(url);

                setNews(response.data.hits);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <Board loadingId={loading} laodingTask={false} data={news} boardTitle={"News"} />
    );
}
