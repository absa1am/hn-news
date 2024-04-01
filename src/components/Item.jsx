export default function Item({ title, author, text, points, url, ncomments }) {
    return (
        <div className="card m-3">
            <div className="list-group-item list-group-item-action m-3">
                <div className="d-flex w-100">
                    <span>
                        <a className="mb-1" href={url} target="_blank" style={{ textDecoration: 'none', color: 'blue' }}>{title}</a> {url && `(${url})`}
                    </span>
                </div>
                { text && <p>{text}</p> }
                <small className="text-body-secondary">{points} points | {author} {ncomments && `| ${ncomments} comments`}</small>
            </div>
        </div>
    );
}
