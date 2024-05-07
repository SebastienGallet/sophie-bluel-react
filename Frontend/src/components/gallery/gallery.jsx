function Gallery({works}) {
    return (
        <div>
            <div className="gallery">
                {works.map(work => (
                    <figure key={work.id}>
                        <img src={work.imageUrl} alt={work.title} />
                        <figcaption>{work.title}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Gallery