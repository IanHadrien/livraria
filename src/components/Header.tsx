import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="Header-header flex items-center justify-between border-1">

      <div className="flex Header-logo">
        <h2>IAS.</h2>
        <div>BOOKS ONLINE</div>
      </div>

      <div className="Header-menu flex">
        {/* <div>Bookstore</div>
        <div>Events</div>
        <div>About</div> */}
        {/* <div>Contato</div> */}
      </div>

    </header>
  )
}
