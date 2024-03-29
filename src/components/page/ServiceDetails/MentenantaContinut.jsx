import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function MentenantaContinut() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="service-details sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* <img src={process.env.PUBLIC_URL + '/img/blog/blog-thumnail.jpg'} alt="images service" /> */}
                <h3>
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + '/img/icons/service-details-icon.png'}
                      alt="service icon images"
                    />
                  </i>
                  Mentenanta si Suport
                </h3>
                <p>
                Oferim servicii de mentenanta de site-uri pentru a ajuta clientii nostri sa pastreze site-urile lor in functionare optima si la zi. Ne concentram pe oferirea de servicii de mentenanta rapide, eficiente si sigure, astfel incat clientii nostri sa poata avea un site web care functioneaza fara probleme. Oferim servicii de mentenanta periodica, astfel incat sa putem verifica site-urile clientilor nostri pentru orice probleme sau necesitate de actualizare, si le oferim suport tehnic pentru orice probleme intampinate. Oferim informatii clare si concise, astfel incat orice client care intra pentru prima data pe site-ul nostru sa inteleaga rapid beneficiile pe care le pot obtine prin intermediul serviciilor noastre de mentenanta de site-uri.
                </p>
              </div>
            </div>
            <ListaServiciiMeniuDreapta />
          </div>
          <ProceduraServiciu />
        </div>
      </div>
    </>
  );
}

export default MentenantaContinut;
