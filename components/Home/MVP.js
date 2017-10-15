const MVP = () => {
  return (
    <div classNameName="home-mvp-wrapper">
      <section className="home-mvp">
        <div className="container">
          <h1 className="home-mvp-title">
            At ECMA Stack, we are experts in building <em>MVPs</em> that are <em>fast, beautiful, and efficient.</em>
          </h1>
          <h2 className="home-mvp-subtitle">
            Are we the right partner for you? Get in touch and let’s find out.
          </h2>

          <div className="email-us col-md-6 col-xs-12">
            <span className="title">Write us</span>
            <a href="mailto:hello@ecmastack.com" className="email-cta text-xs-left">
              hello@ecmastack.com
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .home-mvp {
          background: url(/static/mvp-cake.svg) center 92px no-repeat #fff;
          padding: 260px 0 100px;
          text-align: center;
        }

        .home-mvp .container {
          max-width: 798px;
        }

        .home-mvp .home-mvp-title {
          font-size: 36px;
          margin-bottom: 44px;
        }

        .home-mvp .home-mvp-title em {
          font-style: normal;
          color: #08F;
        }

        .home-mvp .home-mvp-subtitle {
          color: #6E7785;
          font-size: 24px;
          margin-bottom: 25px;
        }

        .home-mvp .email-us {
          margin: 104px auto;
          padding: 0 0 0 60px;
          text-align: left;
          background: url(/static/email-icon.svg) left no-repeat;
        }

        .home-mvp .email-us .title {
          display: block;
          font-size: 24px;
          color: #9BA9BF;
          margin-bottom: -20px;
        }

        .home-mvp .email-us .email-cta {
          color: #08F;
          font-size: 42px;
        }

      `}</style>
    </div>
  )
}

export default MVP
