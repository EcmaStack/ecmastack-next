const FooterHome = () => {
  return (
    <div classNameName="footer-home-wrapper">
    <section className="footer-home">
      <div className="hgroup">
        <h1 className="footer-heading">We are based in the NYC metro area</h1>
        <h2 className="footer-heading-2">and available for face to face meetings in the city or in CT.</h2>
      </div>

      <div className="footer-icon">
        <div className="left-part">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="right-part">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <h2 className="footer-heading-3">We are also available for chat at</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="meetup-name">Northeast Javascript Conference</div>
            <div className="meetup-place">Stamford, CT</div>
          </div>
          <div className="col-md-3">
            <div className="meetup-name">Fluent</div>
            <div className="meetup-place">San Jose, CA</div>
          </div>
          <div className="col-md-3">
            <div className="meetup-name">Meteor Meetup</div>
            <div className="meetup-place">New York City</div>
          </div>
          <div className="col-md-3">
            <div className="meetup-name">GraphQL Meetup</div>
            <div className="meetup-place">NYC</div>
          </div>
        </div>
      </div>
      </section>

      <style jsx>{`
        .footer-home {
          height: 728px;
          position: relative;
          background: #212a3d;
          background: url(/static/nyc-skyline.svg),-moz-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
          background: url(/static/nyc-skyline.svg),-webkit-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
          background: url(/static/nyc-skyline.svg),linear-gradient(120deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212a3d', endColorstr='#1c89ff', GradientType=1 );
          text-align: center;
          padding: 130px 0;
          background-repeat: no-repeat;
          background-position: bottom;
        }

        .footer-home .footer-heading {
          font-size: 30px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 14px;
        }

        .footer-home .footer-heading-2 {
          font-size: 24px;
          color: #9BA9BF;
          margin-bottom: 2px;
        }

        .footer-home .footer-icon {
          display: flex;
          justify-content: center;
        }

        .footer-home .footer-heading-3 {
          font-size: 30px;
          color: #fff;
          margin: 10px auto 38px;
        }

        .footer-home .meetup-name {
          color: #49a0ff;
        }

        .footer-home .meetup-place {
          color: #9da9bd;
        }

        .footer-home .meetup-name,
        .footer-home .meetup-place {
          font-size: 18px;
          text-align: left;
        }

        .footer-home .footer-icon .left-part {
          transform: rotateY(180deg);
          margin-top: 22px;
        }

        .footer-home .footer-icon .left-part,
        .footer-home .footer-icon .right-part {
          margin: 14px 5px 0;
          width: 29px;
          display: flex;
          flex-direction: column;
        }

        .footer-home .footer-icon .left-part .line:nth-child(1),
        .footer-home .footer-icon .right-part .line:nth-child(1) {
          width: 30px;
        }

        .footer-home .footer-icon .left-part .line:nth-child(2),
        .footer-home .footer-icon .right-part .line:nth-child(2) {
          width: 18px;
        }

        .footer-home .footer-icon .left-part .line,
        .footer-home .footer-icon .right-part .line {
          height: 2px;
          margin-bottom: 6px;
        }

        .footer-home .footer-icon .left-part .line:nth-child(3),
        .footer-home .footer-icon .right-part .line:nth-child(3) {
          width: 12px;
        }

        .btn, .footer-home .footer-icon .left-part .line,
        .footer-home .footer-icon .right-part .line,
        .home-services, .pink-gradient,
        .services-page-header.header,
        .short-description {
            background: #E22A70;
            background: -moz-linear-gradient(124deg,#E22A70 0,#EB4452 100%);
            background: -webkit-linear-gradient(124deg,#E22A70 0,#EB4452 100%);
            background: linear-gradient(135deg,#E22A70 0,#EB4452 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#E22A70", endColorstr="#EB4452", GradientType=1 );
        }


      `}</style>
    </div>
  )
}

export default FooterHome
