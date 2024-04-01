import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Item from "./Item";

export default function Asks() {
    const [loadingIds, setLoadingIds] = useState(true);
    const [laodingAsks, setLoadingAsks] = useState(true);
    const [asks, setAsks] = useState([]);
    const [asksIds, setAsksIds] = useState([]);

    useEffect(() => {
        const fetchAsksStoryIds = async () => {
            try {
                const response = await axios.get(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`);

                setAsksIds(response.data);
            } catch (error) {
                console.error("Error fetching asks stories: " + error);
            } finally {
                setLoadingIds(false);
            }
        };

        fetchAsksStoryIds();
    }, []);

    useEffect(() => {
        const fetchAsksStories = async () => {
            let totalFetched = 0;
            const fetchedStories = [];

            for (const asksStoryId of asksIds) {
                try {
                    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${asksStoryId}.json?print=pretty`);
                
                    fetchedStories.push(response.data);
                    totalFetched++;
                } catch (error) {
                    console.error("Error fetching asks stories: " + error);
                } finally {
                    if (totalFetched === asksIds.length) {
                        setLoadingAsks(false);
                    }
                }
            }

            setAsks(fetchedStories);
        };
        
        fetchAsksStories();
    }, [asksIds]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {(loadingIds || laodingAsks) ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className="text-center mt-2"><span>Asks</span></h2>
                    {asks.map((ask, id) => (
                        <Item key={id} title={ask.title} points={ask.score} author={ask.by} url={ask.url} />
                    ))}
                </div>
            )}
        </div>
    );
}
