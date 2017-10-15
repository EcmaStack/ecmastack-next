const Footer = () => {
  return (
    <div>
    <footer className="footer-global text-md-center text-sm-center">
      <div className="footer-nav container d-flex">
        <div className="col-md-4">
          <h3 className="footer-nav-title">Sitemap</h3>
          <ul className="footer-link-list">
            <li><a href="/about" id="ember413" className="ember-view">About</a></li>
            <li><a href="/about" id="ember414" className="ember-view">Projects</a></li>
            <li><a href="/about" id="ember415" className="ember-view">Case Studies</a></li>
            <li><a href="/about" id="ember416" className="ember-view">Blog</a></li>
            <li><a href="/about" id="ember417" className="ember-view">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="footer-nav-title">Social</h3>
          <ul className="footer-link-list">
            <li><a href="/">GitHub</a></li>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="footer-nav-title">Contact</h3>
          <p className="address">1-203-516-0101</p>
          <p className="address">ECMAStack, LLC</p>
          <p className="address">
            65 High Ridge Rd, #522<br/>
            Stamford, CT 06905<br/>
            USA
          </p>
        </div>
      </div>

      &copy; ECMAStack LLC, 2017. All rights reserved
    </footer>
    <style jsx>{`
      .footer-global {
        background: #212A3D;
        color: #4D617C;
        font-size: 18px;
        line-height: 110px;
      }

      .footer-nav {
        color: #8DA3D1;
        text-align: left;
        padding-top: 50px;
        border-bottom: 1px solid #404B62;
      }

      .footer-nav .footer-nav-title {
        font-size: 21px;
        color: #D1DAEE;
      }

      .footer-nav .footer-link-list {
        padding-left: 20px;
      }

      .footer-nav .footer-link-list li {
        line-height: 2;
        margin-bottom: 0;
        font-size: 14px;
      }

      .footer-nav .footer-link-list li a {
        color: #8DA3D1;
      }

      .footer-nav .footer-link-list li a:hover {
        color: #fff;
      }

      .footer-nav .address {
        line-height: 1.6;
        margin-bottom: 10px;
        font-size: 12px;
      }

    `}</style>
    </div>
  )
}

export default Footer;
