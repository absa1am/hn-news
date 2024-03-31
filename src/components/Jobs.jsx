import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

export default function Jobs() {
    const [jobStoryIds, setJobStoryIds] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobStoryIds = async () => {
            try {
                const response = await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?orderBy="$key"&limitToFirst=25');
                
                setJobStoryIds(response.data);
            } catch (error) {
                console.error('Error fetching job stories:', error);
            }
        };

        fetchJobStoryIds();
    }, []);

    useEffect(() => {
        const fetchJobStories = async () => {
            const fetchedStories = [];

            for (const storyId of jobStoryIds) {
                try {
                    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
                    const storyData = response.data;

                    fetchedStories.push(storyData);
                } catch (error) {
                    console.error(`Error fetching job story ${storyId}:`, error);
                }
            }
            
            setJobs(fetchedStories);
        };

        fetchJobStories();
    }, [jobStoryIds]);

    return (
        <div>
            <h2 className="text-center"><span className="">Jobs</span></h2>

            {jobs.map((job, id) => {
                return (
                    <Item key={id} title={job.title} points={job.score} author={job.by} url={job.url} />
                );
            })}
        </div>
    );
}
