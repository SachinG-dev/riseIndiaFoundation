import { Button, ButtonVariant } from "../Buttons/Button";
import "./ContributionsSection.css";

interface CardsData{
    imageUrl: string;
    cardDesc : string;
    buttonUrl : string;
    cardTitle : string;
    buttonText : string;
}

interface ContributionsType{
    title : string;
    desc : string;
    sectionClass?: string | undefined;
    sectionButtonText?: string;
    sectionButtonURL?: string;
    sectionButtonType?: ButtonVariant | undefined;
    cardData: CardsData[];
}

const onChangeCallback = (buttonURL : string | undefined) => {
    if(buttonURL) window.location.href = buttonURL;
  };

export function Contributions({title, desc, sectionClass, cardData, sectionButtonText, sectionButtonType, sectionButtonURL}:ContributionsType){
    return(
        <section className={`contributions position-relative ${sectionClass}`}>
            <div className="contributions__overlay container-lg">
                <div className="row position-relative z-2">
                    {title && <div className={`${desc ? 'col-lg-8' : 'col-12 text-center'}`}>
                         <h1 className="text-white" dangerouslySetInnerHTML={{ __html: title }} />
                    </div>}
                    {desc && <div className="col-lg-4">
                         <p className="text-white">{desc}</p>
                    </div>}
                </div>
                <div className="row position-relative z-2 contributions__boxes hide-scrollbar">
                {cardData.map((data, index) => {
                    const slicedDesc = data.cardDesc.length > 100 ? data.cardDesc.slice(0, 100) + '...' : data.cardDesc;
                    return <div className="col-11 col-lg-8 col-xl-6 pt-5" key={index}>
                        <div className="contributions__box p-3 gap-3 d-sm-flex align-items-sm-center h-100">
                            <img className="img-fluid contributions__box--image" src={data.imageUrl} alt="contributer image" />
                            <div className="contribution__box--content">
                                <h4 className="text-white pt-3 pt-md-0">{data.cardTitle}</h4>
                                <p className="text-white pt-2">{slicedDesc}</p>
                                <Button variant="secondaryArrow" className="px-0" onClick={() => onChangeCallback(data.buttonUrl)}>{data.buttonText}</Button>
                            </div>
                        </div>
                    </div>
                })}
                   
                </div>
                {sectionButtonText && <Button className="mt-5 mx-auto d-flex position-relative align-items-center z-2" variant="primary" onClick={() => onChangeCallback(sectionButtonURL)}>{sectionButtonText}</Button>}
            </div>
        </section>
    )
}
