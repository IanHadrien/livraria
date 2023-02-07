import { useEffect, useState } from "react";
import BookTest from "../assets/img/booktest.png";
// import BookTest from "../assets/img/imageBookMony.jpg";
import "../styles/ListBooks.css";
// import "../../db/ebooks.json";

interface PropsListBooks {
  marginTop: string;
  linkUrl: string;
}

interface EbooksTypes {
  id: number;
  titulo: string;
  preco: string;
  nomeAutor: string
  img: string;
  link: string;
}

export const ListBooks = ({marginTop, linkUrl}: PropsListBooks) => {
  const [ebooks, setEbooks] = useState([]);

  async function getEbooks() {
    const res = await fetch(linkUrl);
    const json = await res.json();
    setEbooks(json);
  }

  useEffect(() => {
    getEbooks();
  }, [])

  return (
    <div className="ListBooks-grid flex items-center justify-center px-20" style={{  marginTop: marginTop }}>  
      {ebooks.map((ebook: EbooksTypes) => {
        return (
          <div key={ebook.id} className="ListBooks-Container w-36 text-center mx-2">
            <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
              <div className="ListBooks-Img flex justify-center">
                <img className="w-40 h-40" src={ebook.img} />
              </div>

              <div className="ListBooks-View">
                <p>Ver</p>
              </div>
            </div>

            <div className="py-2 text-color2 h-32">
              <p>{ebook.titulo}</p>
              <p>R$ {ebook.preco}</p>
            </div>

            <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
              <a className="p-4" target="_blank" href={ebook.link}>Comprar</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
