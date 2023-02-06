import { useEffect, useState } from "react";
import BookTest from "../assets/img/booktest.png";
// import BookTest from "../assets/img/imageBookMony.jpg";
import "../styles/ListBooks.css";
// import "../../db/ebooks.json";

interface  StilyesEdits{
  marginTop: string;
}

export const ListBooks = ({ marginTop }: StilyesEdits) => {
  const [ebooks, setEbooks] = useState([]);

  async function getEbooks() {
    const res = await fetch("../../db/ebooks.json");
    const json = await res.json();
    console.log(json);
    setEbooks(json);
  }

  useEffect(() => {
    getEbooks();
  }, [])

  return (
    <div className="ListBooks-grid flex items-center justify-center px-20" style={{  marginTop: marginTop }}>
      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img className="w-40 h-40" src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>Ver</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Comprar
        </div>
      </div>

      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>View</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Add to Car
        </div>
      </div>
      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>View</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Add to Car
        </div>
      </div>
      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>View</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Add to Car
        </div>
      </div>
      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>View</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Add to Car
        </div>
      </div>
      <div className="ListBooks-Container w-36 text-center mx-2">
        <div className="ListBooks-ImgContainer bg-color3 text-center p-4 cursor-pointer">
          <div className="ListBooks-Img flex justify-center">
            <img src={BookTest} />
          </div>

          <div className="ListBooks-View">
            <p>View</p>
          </div>
        </div>

        <div className="py-2 text-color2">
          <p>I'm a product</p>
          <p>$20.00</p>
        </div>

        <div className="ListBooks-Open p-2 border-solid border-2 text-color2">
          Add to Car
        </div>
      </div>

    </div>
  )
}
