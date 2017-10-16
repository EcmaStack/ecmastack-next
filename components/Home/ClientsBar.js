const ClientsBar = () => {
   return (
     <div className="wrapper">
       <section className="home-clients">
       <div className="container d-flex justify-content-between align-items-center">
         <img src="static/bizlybw.svg" alt="Bizly" className="client-logo" />
         <img src="static/sloohbw.svg" alt="Slooh" className="client-logo" />
         <img src="static/giffybw.svg" alt="GiftFly" className="client-logo" />
         <img src="static/classmatebw.svg" alt="classNamemate" className="client-logo" />
         <img src="static/minellibw.svg" alt="minelli" className="client-logo" />
       </div>
      </section>
     <style jsx>{`
       .home-clients {
         padding: 64px 0;
         background: #212A3D;
       }

       .home-clients .client-logo {
         max-height: 54px;
         flex: 0 0 auto;
       }
     `}</style>
     </div>
    )
 }

 export default ClientsBar
