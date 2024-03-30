function NewsItem({ title, description, src, url }) {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-3 py-3" style={{ maxWidth: "345px" }}>
            <img src={src} className="card-img-top" style={{ height: "200px", width: "310px" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title.slice(0, 50) }</h5>
                <p className="card-text">{description? description.slice(0, 90) : "No description"}</p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    );
}

export default NewsItem;