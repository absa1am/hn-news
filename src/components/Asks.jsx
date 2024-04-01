import axios from "axios";
import { useEffect, useState } from "react";
import Board from "./Board";

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
        <Board loadingId={loadingIds} laodingTask={laodingAsks} data={asks} boardTitle={"Asks"} />
    );
}
