import iconInstagram from "../assets/img/instagram.png";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer-Container flex items-center justify-between">
      <div>
        <p>© Frontend Mentor 2019 - 2023</p>
      </div>

      <div>
        <img className="w-7" src={iconInstagram} />
      </div>
    </div>
  )
}
