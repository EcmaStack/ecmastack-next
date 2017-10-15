import Header from '../components/Header'
import HomeHero from '../components/Home/Hero'
import OurProcess from '../components/Home/OurProcess'
import Services from '../components/Home/Services'
import HomeCTA from '../components/Home/HomeCta'
import ClientsBar from '../components/Home/ClientsBar'
import MVP from '../components/Home/MVP'
import FooterHome from '../components/Home/FooterHome'
import Footer from '../components/Footer'

export default () => (
  <div>
    <div className="home-hero-header">
      <Header transparent />
      <HomeHero />
    </div>
    <OurProcess />
    <Services />
    <HomeCTA />
    <ClientsBar />
    <MVP />
    <FooterHome />
    <Footer />

    <style jsx>{`
      .home-hero-header {
        background: -moz-linear-gradient(-35deg,  #273555 0%, #292d46 18%, #25293d 33%, #292d46 40%, #1c87fb 100%);
        background: -webkit-linear-gradient(-35deg,  #273555 0%,#292d46 18%,#25293d 33%,#292d46 40%,#1c87fb 100%);
        background: linear-gradient(125deg,  #273555 0%,#292d46 18%,#25293d 33%,#292d46 40%,#1c87fb 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#273555", endColorstr="#1c87fb",GradientType=1 );
      }

      :global(.btn) {
        background: #E22A70;
        background: -moz-linear-gradient(124deg,#E22A70 0,#EB4452 100%);
        background: -webkit-linear-gradient(124deg,#E22A70 0,#EB4452 100%);
        background: linear-gradient(135deg,#E22A70 0,#EB4452 100%);
        color: #fff;
        color: #fff;
        text-transform: uppercase;
        border-radius: 4px;
        padding: 25px 34px;
        font-size: 18px;
        border: 0;
        cursor: pointer;
        transition: all .3s;
      }
    `}</style>
  </div>
)
