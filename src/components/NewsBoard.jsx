import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&${category}&apiKey=${"6d5bd72f868f4cac985463d53d4db885"}`;

        const fetchNews = async () => {
            try {
                const response = await axios.get(url);

                setArticles(response.data.articles);
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
                return <NewsItem key={id} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    );
}

export default NewsBoard;