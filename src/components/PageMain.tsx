import "../styles/PageMain.css";
import ImageBookMony from "../assets/img/imageBookMony.jpg";
import { Title } from "./Title";
import { ListBooks } from "./ListBooks";

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

      <Title 
        title={"BESTSELLERS"} 
        subTitle={"BINK. Publishers"} 
        color={"#0e345a"} 
      />

      <div className="PageMain-Components bg-color1">
        <ListBooks marginTop={"-80px"} />

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        <Title 
          title={"RECOMMENDED BOOKS"} 
          subTitle={"This Month's"} 
          color={"#ffffff"} 
        />
        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        
        <ListBooks marginTop={"50px"}  />

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>

        <div className="text-center py-8 text-color2 font-RobotoSlab text-5xl">
          THERE'S NO <br />
          SUCH THING AS TOO <br />
          MANY BOOKS
        </div>

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
      </div>
      
      <div>
        Componente de Promoção
      </div>
    </div>
  )
}
