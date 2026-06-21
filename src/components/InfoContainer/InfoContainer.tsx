import './InfoContainer.scss';

interface InfoContainerProps {
    title: string;
    dataList: any[];
    CardComponent: React.ElementType;
    id?: string;
}

export default function InfoContainer( { title, dataList, CardComponent, id }: InfoContainerProps) {
    if (!dataList || dataList.length === 0) {
        return null;
    }

    return (
        <section id={id} className="info-container">
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