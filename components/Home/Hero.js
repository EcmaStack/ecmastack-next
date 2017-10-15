export default () => (
  <div>
  <div className="home-hero">
  <div className="container-fluid home-hero-content">
    <div className="row justify-content-between">
      <div className="col-md-6 home-intro col-sm-12">
        <h1 className="site-title">We help startups launch beautiful, functional MVPs in minimum time</h1>
        <h2 className="site-tagline">Expert MVP development so you can quickly attract customers and get investors on board</h2>
        <button className="btn">Let’s Get in Touch</button>
      </div>
      <div className="col-md-5 hidden-sm-down home-rocket-wrapper">
        <div className="home-rocket">
          <div className="lib-icon angular"></div>
          <div className="lib-icon react"></div>
          <div className="lib-icon node"></div>
          <div className="lib-icon meteor"></div>
          <img src="/static/home-rocket.png" width="35%" alt="JavaScript development company" className="home-rocket-img" />
        </div>
      </div>
    </div>
  </div>
</div>
<style jsx>{`
  .home-hero {
    height: 550px;
    padding: 0 60px 100px;
  }

  .home-hero .home-intro {
    margin-top: 70px;
  }

  .home-hero .home-rocket-wrapper {
    display: flex;
    justify-content: center;
  }

  .home-hero .site-title {
    color: #fff;
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .home-hero .site-tagline {
    color: #fff;
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin-bottom: 60px;
  }

  .btn {
    color: #fff;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 25px 34px;
    font-size: 18px;
    border: 0;
    cursor: pointer;
    transition: all .3s;
  }

  .home-hero .home-rocket {
    position: relative;
    background: url(/static/home-rocket-background.svg) no-repeat;
    height: 454px;
    flex-basis: 471px;
    text-align: center;
  }

  .home-hero .home-rocket .lib-icon {
    position: absolute;
    text-transform: uppercase;
    color: #fff;
    font-size: 12px;
  }

  .home-hero .home-rocket .lib-icon.angular {
    left: 36px;
    top: 120px;
  }

  .home-hero .home-rocket .lib-icon.react {
    left: 307px;
    top: 150px;
  }

  .home-hero .home-rocket .lib-icon.node {
    left: 372px;
    top: 281px;
  }

  .home-hero .home-rocket .lib-icon.meteor {
    left: -5px;
    top: 305px;
  }

  .lib-icon:before {
    content: "";
    display: block;
    position: absolute;
    border: 4px solid #e53366;
    width: 26px;
    height: 26px;
    border-radius: 30px;
  }

  .home-hero .home-rocket .lib-icon:after {
    position: absolute;
    z-index: 2;
    top: 6px;
    left: 14px;
  }

  .angular:after {
    content: "GraphQL";
  }
  .react:after {
    content: "React.js"
  }
  .node:after {
    content: "Node.js"
  }
  .meteor:after {
    content: "Meteor.js"
  }
`}
</style>
</div>
)
