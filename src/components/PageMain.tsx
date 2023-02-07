import "../styles/PageMain.css";
import ImageBookMony from "../assets/img/imageBookMony.jpg";
import { Title } from "./Title";
import { ListBooks } from "./ListBooks";
import { Promotions } from "./Promotions";

export const PageMain = () => {
  return (
    <div className="PageMain-container">
      <Title 
        title={"OS 12 Melhores livros para ajudar na sua educação financeira"} 
        subTitle={""} 
        color={"#0e345a"} 
      />

      <div className="PageMain-TextCenter text-color1 text-3xl text-center py-6">
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
        <ListBooks marginTop={"-80px"} linkUrl={"../../db/ebooks.json"}/>

        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        <Title 
          title={"OS MAIS PROCURADOS"} 
          subTitle={"Este mês"} 
          color={"#ffffff"} 
        />
        <div className="flex justify-center"><div className="ListBooks-BordaBottom" /></div>
        
        <ListBooks marginTop={"50px"}  linkUrl={"../../db/ebooks2.json"}/>

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
