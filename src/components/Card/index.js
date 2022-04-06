export default function Card ({imageUrl, title, artist, externalUrl}) {
    return (
        <div className="Card">
            <div className="Cover">
                <img src={imageUrl} width="300" height="300" />
            </div>
            <div className="Container">
                <h2>{title}</h2>
                <p>{artist}</p>
                <button>
                    <a href={externalUrl}>Go to The Song</a>
                </button>
            </div>
        </div>
    )
}
