import { CardContainer } from "./card.styles";

interface CardProps {
    cat: any;
}

function Card({cat}: CardProps) {
  return (
    <CardContainer>
      <div className="cat-card">

        <div className="box">
          <div className="content">
            <h2>{cat!.max_life_expectancy}</h2>
            <h3>{cat!.name}</h3>
            <p>Life Expectancy: {cat!.max_life_expectancy} years<br/>
            Country Origin: {cat!.origin}<br/>
            Intelligence: {cat!.intelligence}</p>
            <img src={cat!.image_link} className="card__image"/>
          </div>
        </div>

      </div>
    </CardContainer>
  )
}

export default Card