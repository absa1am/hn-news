import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './Board';

export default function Jobs() {
    const [loadingId, setLoadingId] = useState(true);
    const [loadingJob, setLoadingJob] = useState(true);
    const [jobStoryIds, setJobStoryIds] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobStoryIds = async () => {
            try {
                const response = await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?orderBy="$key"&limitToFirst=25');
                
                setJobStoryIds(response.data);
            } catch (error) {
                console.error('Error fetching job stories:', error);
            } finally {
                setLoadingId(false);
            }
        };

        fetchJobStoryIds();
    }, []);

    useEffect(() => {
        const fetchJobStories = async () => {
            const fetchedStories = [];
            let fetchedCount = 0;

            for (const storyId of jobStoryIds) {
                try {
                    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
                    const storyData = response.data;

                    fetchedStories.push(storyData);
                    fetchedCount++;
                } catch (error) {
                    console.error(`Error fetching job story ${storyId}:`, error);
                } finally {
                    if (fetchedCount === jobStoryIds.length) {
                        setLoadingJob(false);
                    }
                }
            }
            
            setJobs(fetchedStories);
        };


        fetchJobStories();
    }, [jobStoryIds]);

    return (
        <Board loadingId={loadingId} laodingTask={loadingJob} data={jobs} boardTitle={"Jobs"} />
    );
}
