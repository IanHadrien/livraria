import BookTest from "../assets/img/booktest.png";
import "../styles/ListBooks.css";

interface  StilyesEdits{
  marginTop: string;
}

export const ListBooks = ({ marginTop }: StilyesEdits) => {
  return (
    <div className="ListBooks-grid flex items-center justify-center px-20" style={{  marginTop: marginTop }}>
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
