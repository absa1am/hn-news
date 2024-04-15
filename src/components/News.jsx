import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./Board";

export default function News({ category }) {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search_by_date?tags=(story,polls)");

    useEffect(() => {
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
    }, [url]);

    const handleSearch = (value) => {
        if (value === "popularity") {
            setUrl("https://hn.algolia.com/api/v1/search?tags=(story,polls)&numericFilters=points>0");
        } else if (value === "date") {
            setUrl("https://hn.algolia.com/api/v1/search_by_date?tags=(story,polls)");
        }
    }

    return (
        <Board loadingId={loading} laodingTask={false} data={news} boardTitle={"News"} handleSearch={handleSearch} />
    );
}
