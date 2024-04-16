import { useEffect, useState } from "react";
import Item from "./Item";
import Spinner from "./Spinner";

export default function Board({loadingId, laodingTask, data, boardTitle, handleSearch}) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    const filteredData = data.filter((item) => item.title.includes(searchQuery) || (item.authro && item.author.includes(searchQuery)) || (item.url && item.url.includes(searchQuery)));

    return (
        <div>
            {(loadingId || laodingTask) ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <Spinner />
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <h2 className="text-center mt-2">
                            <span>{boardTitle}</span>
                        </h2>

                        <div className="d-flex justify-content-between align-items-center m-3">
                            <div>
                                Search by
                                <select className="rounded border m-2 p-1" onChange={(e) => handleChange(e)} defaultValue={"Date"}>
                                    <option value={"date"}>Date</option>
                                    <option value={"popularity"}>Popularity</option>
                                </select>
                            </div>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" value={searchQuery} onChange={ handleSearchQuery } aria-label="Search" />
                            </form>
                        </div>
                        
                        {filteredData.map((item, id) => (
                            <Item key={id} title={item.title} points={item.score? item.score:item.points} author={item.by? item.by:item.author} url={item.url} ncomments={item.num_comments >=0 ? `${item.num_comments}`:""} createdAt={item.created_at} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
