import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import Spinner from "./Spinner";

export default function News({ category }) {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        let url = `https://hn.algolia.com/api/v1/search?query=`;

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {loading? (<Spinner />
            ) : (
                <div>
                    <h2 className="text-center mt-2"><span>News</span></h2>
                
                    {news.map((item, id) => {
                        return (
                            <Item key={id} title={item.title} points={item.points} author={item.author} numComments={item.num_comments} url={item.url} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
