import Item from "./Item";
import Spinner from "./Spinner";

export default function Board({loadingId, laodingTask, data, boardTitle}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {(loadingId || laodingTask) ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className="text-center mt-2"><span>{boardTitle}</span></h2>
                    {data.map((item, id) => (
                        <Item key={id} title={item.title} points={item.score? item.score:item.points} author={item.by? item.by:item.author} url={item.url} ncomments={item.num_comments? item.num_comments:""} />
                    ))}
                </div>
            )}
        </div>
    );
}
