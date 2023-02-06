import { Title } from "./Title";
import ImageTeste from "../assets/img/booktest.png";
import "../styles/Promotions.css";

export const Promotions = () => {
  return (
    <div>
      <Title title={"EM PROMOÇÃO"} subTitle={"limitado"} color={"#0e345a"}/>

      <div className="Promotions-container flex items-center justify-center">
        <div className="px-10">
          <h2 className="text-2xl">Titulo do Livro</h2>

          <p className="py-7">Nome do autor</p>
          <p>Hoje</p>
          <div className="flex justify-start"><div className="Promotions-BordaBottom" /></div>
          <p>Jul 12, 2023, 7:00 PM</p>

          <div className="Promotions-Button">
            <button>COMPRE AGORA</button>
          </div>
        </div>

        <div className="px-10">
          <img className="w-60" src={ImageTeste} alt="Promoção do dia"/>
        </div>
      </div>
    </div>
  )
}
