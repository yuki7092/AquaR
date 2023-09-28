import { sidebarHandler } from '../Animation'

const HeaderForPages = () => {

  return (
    <>
      <header>
        <div className="container-fluid">
          <a href="/">
            <img className="headerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png" alt="" />
          </a>
          <div className="headerForpages">
            <a href="/">AquaR</a>
          </div>
        </div>
      </header>
      <a href="/" className="d-flex align-items-center" onClick={ sidebarHandler }>
        <div id="menuController" className="menu-controller">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </a>
    </>
  )
}

export default HeaderForPages