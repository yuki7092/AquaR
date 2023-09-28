import { showSidebar } from "../Animation";

const Header = () => {
  return (
    <header className="position-fixed w-100">
      <div className="container d-flex justify-content-between align-items-center h-100">
        <div className="header-left">預留</div>
        <div className="header-center d-flex align-items-center gap-3">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <span className="fw-bold">AquaR</span>
        </div>
        <div className="header-right ">
          <a
            href="#"
            className="d-flex align-items-center"
            onClick={showSidebar}
          >
            <span>選單</span>
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
