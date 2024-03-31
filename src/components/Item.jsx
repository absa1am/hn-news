export default function Item({ title, author, points, url, numComments }) {
    return (
        <div className="card mb-3 d-inline-block mx-3 my-3 px-3 py-3">
            <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100">
                    <span>
                        <a className="mb-1" href={url} target="_blank">{title}</a>
                        ({url})
                    </span>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">{points} points | {author} | {numComments} comments</small>
            </div>
        </div>
    );
}
