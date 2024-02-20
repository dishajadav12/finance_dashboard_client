import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>MoneyTracker</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L3LikQv4W3Qt71mWHAd5HAptpY2UoZe0mg&usqp=CAU"
            alt=""
          />
          <span>Disha</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
