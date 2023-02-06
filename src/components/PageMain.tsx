import "../styles/PageMain.css";
import ImageBookMony from "../assets/img/imageBookMony.jpg";
import { Title } from "./Title";
import { ListBooks } from "./ListBooks";
import { Promotions } from "./Promotions";

export const PageMain = () => {
  return (
    <div className="PageMain-container">
      {/* <div className="PageMain-image">
        <p>
          Ler é um ato que <br />
          nos liberta e nos <br /> 
          dá asas para <br /> 
          alcançar voos mais altos 
        </p>
      </div> */}

      <div className="text-color1 text-3xl text-center py-6">
        Ler livros sobre investimentos é uma ótima maneira de aprender sobre <br/>
        as diferentes estratégias e conceitos envolvidos na tomada de decisões <br/>
        de investimento. Além disso, ler livros escritos por investidores <br/>
        bem-sucedidos ou especialistas em finanças ira ajudá-lo a adquirir uma <br/>
        compreensão profunda das tendências do mercado e do <br/>
        pensamento financeiro.
      </div>

      <Title 
        title={"RECOMENDAÇÕES PARA COMEÇAR A INVESTIR"} 
        subTitle={"Ebooks em alta"} 
        color={"#0e345a"} 
      />

      <div className="PageMain-Components bg-color1">
        <ListBooks marginTop={"-80px"} />

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        <Title 
          title={"OS MAIS PROCURADOS"} 
          subTitle={"Este mês"} 
          color={"#ffffff"} 
        />
        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        
        <ListBooks marginTop={"50px"}  />

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>

        <div className="text-center py-8 text-color2 font-RobotoSlab text-5xl">
          "VAI DA CERTO<br />
          PORQUE EU FAREI COM<br />
          QUE DÊ CERTO"
        </div>

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
      </div>
      
      <Promotions />
    </div>
  )
}
