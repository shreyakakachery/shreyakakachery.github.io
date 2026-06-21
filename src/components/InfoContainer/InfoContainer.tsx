import './InfoContainer.scss';

export default function InfoContainer( { title, dataList, CardComponent }) {
    if (!dataList || dataList.length === 0) {
        return null;
    }

    return (
        <section className="info-container">
            <h2 className="section-title">{
            title}
            </h2>
            <div className="cards-grid">
                {dataList.map((item, index) => (
                    <CardComponent key={index} {...item} />
    
                ))}
            </div>
        </section>
    );
}