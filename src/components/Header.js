import { sidebarHandler } from "../Animation";

const Header = () => {
  return (
    <>
      <header className="position-fixed w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center h-100">
          <div className="header-left">
            {/* LOGO */}
            {/* <img className="logo" src={require("./img/LOGO07.png")} alt="" /> */}
          </div>
          <div className="header-center d-flex align-items-center gap-3">
            {/* <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
              alt=""
            /> */}

            {/* <img className="logo" src={require("./img/LOGO04.png")} alt="" /> */}
            <span className="fw-bold text-light">AquaR</span>
          </div>
          <div className="header-right ">
            {/* <span>選單</span>
            <span className="material-symbols-outlined">menu</span> */}
          </div>
        </div>
      </header>
      <a
        href="#"
        className="d-flex align-items-center"
        onClick={sidebarHandler}
      >
        <div id="menuController" className="menu-controller">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </>
  );
};

export default Header;
