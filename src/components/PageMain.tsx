import "../styles/PageMain.css";
import ImageBookMony from "../assets/img/imageBookMony.jpg";

export const PageMain = () => {
  return (
    <div className="PageMain-container">
      <div>
        <img src={ImageBookMony} alt="Livros de Investimento" />
      </div>

      <div>
        Componente 1
      </div>

      <div>
        Componente 2
      </div>

      <div>
        Componente 3
      </div>
    </div>
  )
}
