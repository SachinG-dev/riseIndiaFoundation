import { Button } from "../../../components/atom/Buttons/Button";
import "./ProgramInitiatives.css"
interface CardData{
  iconSrc: string;
  cardTitle: string;
  cardDescription : string;
  buttonURL: string;
}

type ClassesType = {
  sectionClasses?: string;
  sectionTitleClasses: string;
  cardClasses?: string;
  cardTitleClass? :string;
}
interface ProgramInitiativesProps {
  title:string;
  cardButtonText ?: string;
  cardData : CardData[];
  overAllClasses : ClassesType;
}

const onChangeCallback = (buttonURL : string | undefined) => {
  if(buttonURL) window.location.href = buttonURL;
};

export function ProgramInitiatives({title, cardData, overAllClasses, cardButtonText} : ProgramInitiativesProps) {
  return (
    <section className={`program-initiatives ${overAllClasses.sectionClasses}`}>
      <div className="container-lg">
        <h3 className={overAllClasses?.sectionTitleClasses} dangerouslySetInnerHTML={{ __html: title }} />
        <div className="row flex-nowrap flex-lg-wrap justify-content-lg-center overflow-scroll hide-scrollbar">
        {cardData.map((data, index)=>{
          return(
          <div key={index} className={`col-11 col-sm-5 col-lg-4 text-center mt-4 ${overAllClasses.cardClasses}`}>
              <div className="program-initiatives__box bg-white p-4 h-100">
                <img src={data.iconSrc} alt='program-initiatives-icon' className='program-initiatives__icon' />
                <h3 className={`pt-4 ${overAllClasses.cardTitleClass}`}>{data.cardTitle}</h3>
                <p className="pt-3">{data.cardDescription}</p>
                <div className="d-flex justify-content-center">
                  {cardButtonText && <Button onClick={() => onChangeCallback(data.buttonURL)} variant="primaryArrow">{cardButtonText}</Button>}
                </div>
              </div>
          </div>
          )
        })}
        </div>
      </div>
    </section>
  );
}
