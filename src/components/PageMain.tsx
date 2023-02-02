import "../styles/PageMain.css";
import ImageBookMony from "../assets/img/imageBookMony.jpg";
import { Title } from "./Title";

export const PageMain = () => {
  return (
    <div className="PageMain-container">
      <div className="PageMain-image">
        <p>
          Ler é um ato que <br />
          nos liberta e nos <br /> 
          dá asas para <br /> 
          alcançar voos mais altos 
          {/* A SOFA, <br />
          A GOOD <br />
          BOOK, <br />
          AND YOU. */}
        </p>
      </div>

      <Title title={"BESTSELLERS"} subTitle={"BINK. Publishers"} />

      <div className="bg-color1">
        <div>
          Componente 1
        </div>

        <div>
          Componente 2
        </div>
      </div>
      

      <div>
        Componente 3
      </div>
    </div>
  )
}
