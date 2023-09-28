const Footer = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  linkHref1,
  linkHref2,
  linkHref3,
  linkHref4,
  linkHref5,
}) => {
  return (
    <footer>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="topBlock">
          <div className="logoBlock">
            <a href="/">
              <img
                className="logoImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
              <p className="logoText">AquaR</p>
            </a>
          </div>

          <div className="communityBlcok">
            <p>Community</p>
            <div className="communityGroup">
              <a href="/">
                <img
                  src="https://img.icons8.com/ios-filled/30/FFFFFF/twitter.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://img.icons8.com/ios-filled/30/FFFFFF/facebook-new--v1.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://img.icons8.com/ios-filled/30/FFFFFF/instagram-new--v1.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="pagesBlock">
            <p>Pages</p>
            <div className="pagesGroup">
              <a href={linkHref1}>{link1}</a>
              <a href={linkHref2}>{link2}</a>
              <a href={linkHref3}>{link3}</a>
              <a href={linkHref4}>{link4}</a>
              <a href={linkHref5}>{link5}</a>
            </div>
          </div>
        </div>

        <div className="botBlock">
          <p>408台中市南屯區黎明路二段658號, 1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
