export default function Item({ title, author, points, url, numComments }) {
    return (
        <div className="card m-3">
            <div className="list-group-item list-group-item-action m-3">
                <div className="d-flex w-100">
                    <span>
                        <a className="mb-1" href={url} target="_blank">{title}</a> ({url})
                    </span>
                </div>
                <small className="text-body-secondary">{points} points | {author} | {numComments} comments</small>
            </div>
        </div>
    );
}
