import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://hn.algolia.com/api/v1/search?query=`;

        const fetchNews = async () => {
            try {
                const response = await axios.get(url);

                setArticles(response.data.hits);
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div>
            <h2 className="text-center"><span className="">News</span></h2>
        
            {articles.map((news, id) => {
                return (
                    <NewsItem key={id} title={news.title} points={news.points} author={news.author} numComments={news.num_comments} url={news.url} />
                );
            })}
        </div>
    );
}

export default NewsBoard;