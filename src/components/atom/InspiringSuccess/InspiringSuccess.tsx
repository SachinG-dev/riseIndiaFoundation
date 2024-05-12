import "./InspiringSuccess.css"

interface InspiringSuccessType{
    imageURL : string;
    cardTitle : string;
    cardDesc: string;
    cardAlignment: string;
    cardClasses: string;
}

interface InspiringSuccessProps{
    title: string;
    sectionClasses: string | undefined;
    inspiringSuccessCardData : InspiringSuccessType[]
}

export function InspiringSuccess({title, sectionClasses, inspiringSuccessCardData}: InspiringSuccessProps){
    return(
        <div className={`inspiring-success ${sectionClasses}`}>
            <div className="container-lg">
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                <div className="row">
                    <div className="col">
                        {inspiringSuccessCardData.map((data, index)=>{
                        return( 
                        data.cardAlignment === 'Left' ? 
                        <div className="inspiring-success__box d-flex ms-auto gap-4 flex-column-reverse flex-sm-row mt-5 align-items-start" key={index}>
                            <div className="inspiring-success__box--content text-center text-sm-end">
                                {data?.cardTitle && <h3 className="text-primary mb-0">{data.cardTitle}</h3>}
                                {data?.cardDesc && <p className="mb-0">{data.cardDesc}</p>}
                            </div>
                            <img className="img-fluid" src={data?.imageURL} alt="" />
                        </div>
                        :
                        <div className="inspiring-success__box d-flex flex-column flex-sm-row me-auto gap-4 mt-5">
                           <img className="img-fluid" src={data?.imageURL} alt="" />
                            <div className="inspiring-success__box--content text-center text-sm-start">
                                {data?.cardTitle && <h3 className="text-primary mb-0">{data.cardTitle}</h3>}
                                {data?.cardDesc && <p className="mb-0">{data.cardDesc}</p>}
                            </div>
                        </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}