function NewsItem({ title, author, points, url, numComments }) {
    return (
        <div className="card mb-3 d-inline-block mx-3 my-3 px-3 py-3">
            <div class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <a class="mb-1" href={url} target="_blank">{title} ({url})</a>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-body-secondary">{points} points | {author} | {numComments} comments</small>
            </div>
        </div>
    );
}

export default NewsItem;