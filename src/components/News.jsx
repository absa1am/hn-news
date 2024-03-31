import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

export default function News({ category }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        let url = `https://hn.algolia.com/api/v1/search?query=`;

        const fetchNews = async () => {
            try {
                const response = await axios.get(url);

                setNews(response.data.hits);
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div>
            <h2 className="text-center"><span className="">News</span></h2>
        
            {news.map((item, id) => {
                return (
                    <Item key={id} title={item.title} points={item.points} author={item.author} numComments={item.num_comments} url={item.url} />
                );
            })}
        </div>
    );
}
