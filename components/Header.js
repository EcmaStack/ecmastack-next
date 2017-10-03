import Link from 'next/link'

export default () => (
  <div>
  <header className="header">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-2 logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="col-md-6 navigation text-md-right col-sm-12">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/clients">Clients</Link>
          <Link href="https://medium.com/ecmastack">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  </header>
  <style jsx>{`
    .header {
      padding: 56px 60px 100px;
      background: #273555;
      background: -moz-linear-gradient(-35deg,  #273555 0%, #292d46 18%, #25293d 33%, #292d46 40%, #1c87fb 100%);
      background: -webkit-linear-gradient(-35deg,  #273555 0%,#292d46 18%,#25293d 33%,#292d46 40%,#1c87fb 100%);
      background: linear-gradient(125deg,  #273555 0%,#292d46 18%,#25293d 33%,#292d46 40%,#1c87fb 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#273555", endColorstr="#1c87fb",GradientType=1 );
    }

    .home-header {
      height: 800px;
    }

    .services-page-header.header,
    .work-page-header.header {
      margin-top: 0;
      padding-bottom: 0;
    }

    .home-intro {
      margin-top: 46px;
      height: 440px;
    }

    .site-title {
      margin-bottom: 22px;
    }

    .home-rocket {
      height: 385px;
      flex-basis: 373px;
      background-size: contain;
    }

    .home-rocket img {
      margin: 0 110px;
    }

    .work-page-hero-img {
      margin-top: -78px;
    }

    .navigation a {
      color: #fff;
      padding-left: 40px;
      font-size: 18px;
      text-transform: lowercase;
    }

  `}</style>
  </div>
)
