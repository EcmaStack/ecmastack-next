export default () => (
  <div>
  <section className="home-section container home-our-process">
  <h2 className="section-title text-md-center">What it’s like to work with us</h2>

  <article className="process-block right-bubble row">
    <div className="col-md-6">
      <h3 className="block-title">Collaborative Planning</h3>
      <p className="block-description">We use our experience building MVPs to help you define your idea in a way that we can turn into a real, professional-grade website or mobile app.</p>
    </div>
    <div className="col-md-6 hidden-xs-down">
      <img src="/static/collaborative-icon.svg" alt="Collaborative Planning" />
    </div>
  </article>

  <article className="process-block left-bubble row">
    <div className="col-md-6 hidden-xs-down text-right">
      <img src="/static/management-icon.svg" alt="Collaborative Planning" />
    </div>
    <div className="col-md-6">
      <h3 className="block-title">End-to-end Management</h3>
      <p className="block-description">
        A dedicated project manager on our side handles everything, meeting with you regularly to report on progress and making sure the project is implemented according to schedule.
      </p>
    </div>
  </article>

  <article className="process-block right-bubble row">
    <div className="col-md-6">
      <h3 className="block-title">Guaranteed Quality</h3>
      <p className="block-description">We practice agile development -- frequent iterations that incorporate your feedback and guarantee the project is on track to match exactly what you have in mind.</p>
    </div>
    <div className="col-md-6 hidden-xs-down">
      <img src="/static/quality-icon.svg" alt="Collaborative Planning" />
    </div>
  </article>

  </section>
  <style jsx>{`
    .home-our-process.container {
      padding-top: 128px;
      padding-bottom: 134px;
      max-width: 980px;
    }

    .section-title {
      margin-bottom: 50px;
    }

    .home-our-process .process-block {
      margin-bottom: 28px;
    }

    .home-our-process .block-title {
      color: #08F;
      margin: 88px auto 24px;
    }

    home-our-process .block-description {
      font-size: 18px;
      color: #4F678B;
      line-height: 30px;
    }
  `}</style>
  </div>
)
