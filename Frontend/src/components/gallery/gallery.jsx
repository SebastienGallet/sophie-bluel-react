function Gallery({works}) {
    return (
        <div>
            <h2>Mes Projets</h2>
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