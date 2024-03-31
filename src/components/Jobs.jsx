import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import Spinner from './Spinner';

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

        if (jobStoryIds.length > 0) {
            fetchJobStories();
        }
    }, [jobStoryIds]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {(loadingId || loadingJob) ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className="text-center mt-2"><span>Jobs</span></h2>
                    {jobs.map((job, id) => (
                        <Item key={id} title={job.title} points={job.score} author={job.by} url={job.url} />
                    ))}
                </div>
            )}
        </div>
    );
}
