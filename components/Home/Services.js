export default () => (
  <div>
    <section className="home-section home-services">
      <div className="container">
        <h2 className="section-title text-md-center">How we can help you</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="/static/design-icon.svg" alt="web design services" className="service-icon" />
            <h3 className="service-name">Gorgeous Graphic Design</h3>
            <p className="service-description">
              The first impression anybody will get of your business is the design, &nbsp;
              which is why we start each project with wireframes and UI to make sure your MVP looks great.
            </p>
          </div>

          <div className="col-md-4">
            <img src="/static/ux-icon.svg" alt="web design services" className="service-icon" />
            <h3 className="service-name">Seamless User Experience</h3>
            <p className="service-description">
              We invest a lot of effort to understand your users so we can make your &nbsp;
              MVP super useful and intuitive for your target audience.
            </p>
          </div>

          <div className="col-md-4">
            <img src="/static/code-icon.svg" alt="web design services" className="service-icon" />
            <h3 className="service-name">Clean, Functional Code</h3>
            <p className="service-description">
              Our projects are built using the most modern and powerful frameworks, &nbsp;
              including Node.js, Meteor.js, Angular.js, and React.
            </p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .home-services {
        padding: 110px 0 94px;
        color: #fff;
        background: #E22A70;
        background: -moz-linear-gradient(124deg, #E22A70 0%, #EB4452 100%);
        background: -webkit-linear-gradient(124deg, #E22A70 0%,#EB4452 100%);
        background: linear-gradient(135deg, #E22A70 0%,#EB4452 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#{#E22A70}", endColorstr="#{#EB4452}",GradientType=1 );
      }

      .section-title {
        margin-bottom: 50px;
      }

      .home-services .service-icon {
        margin: 12px auto 38px;
        display: block;
        height: 80px;
      }

      .home-services .service-name {
        margin-bottom: 25px;
        font-size: 24px;
        padding-left: 62px;
      }

      .home-services .service-description {
        font-size: 18px;
        padding-left: 62px;
      }
    `}</style>
  </div>
)
