const HomeCTA = () => {
   return (
     <div classNameNameName="home-cta-wrapper">
      <section className="home-cta">
        <h1 className="home-cta-title">Your turn</h1>
        <h2 className="home-cta-subtitle">Get fast &amp; robust solutions for your next project with ECMAStack.</h2>
        <button className="btn">Let’s Get in Touch</button>
      </section>
     <style jsx>{`
       .home-cta {
        background: #F5FAFF;
        padding: 100px 0 110px;
        color: #08F;
        text-align: center;
      }

      .home-cta .home-cta-title {
        font-size: 125px;
        opacity: .3;
        margin: -34px 0 -45px;
      }

      .home-cta .home-cta-subtitle {
        font-size: 30px;
        max-width: 500px;
        margin: 0 auto 44px;
        line-height: 1.3;
      }

      .home-cta .btn {
        padding: 24px 35px;
        font-size: 21px;
        box-shadow: 2px 4px 27px -7px #333;
      }

      .home-cta .btn:hover {
        box-shadow: none;
      }
     `}</style>
     </div>
    )
 }

 export default HomeCTA
