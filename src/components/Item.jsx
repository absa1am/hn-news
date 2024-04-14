function getDomainFromUrl(url) {
    let domain = url.replace(/(https?:\/\/)?(www\.)?/, '');
  
    domain = domain.split('/')[0];
  
    return domain;
}

const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const createdAt = new Date(timestamp);
    const difference = currentTime - createdAt;
    const secondsAgo = Math.floor(difference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);
  
    if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`;
    } else if (minutesAgo < 60) {
        return `${minutesAgo} minutes ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo} hours ago`;
    } else if (daysAgo < 30) {
        return `${daysAgo} days ago`;
    } else if (monthsAgo < 12) {
        return `${monthsAgo} months ago`;
    } else {
        return `${yearsAgo} years ago`;
    }
};

export default function Item({ title, author, text, points, url, ncomments, createdAt }) {
    return (
        <div className="card m-3">
            <div className="list-group-item list-group-item-action m-3">
                <div className="d-flex w-100">
                    <span>
                        <a className="mb-1" href={url} target="_blank" style={{ textDecoration: 'none' }}>{title}</a> {url && `(${getDomainFromUrl(url)})`}
                    </span>
                </div>
                { text && <p>{text}</p> }
                <small className="text-body-secondary">{points} points | {author} | {calculateTimeAgo(createdAt)} {ncomments && `| ${ncomments} comments`}</small>
            </div>
        </div>
    );
}
