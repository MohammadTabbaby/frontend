import React from 'react'
//import './doctors.css'
import doc1 from '../../src/assets/doc-1.jpg';
import doc2 from '../../src/assets/doc-2.jpg';
import doc3 from '../../src/assets/doc-3.jpg';
import doc4 from '../../src/assets/doc-4.jpg';
import doc5 from '../../src/assets/doc-5.jpg';
import doc6 from '../../src/assets/doc-6.jpg';

function Doctors() {
    return (
        <div><section className="doctors" id="doctors">

            <h1 className="heading"> Nos <span> Services</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src='https://cdn1.docteursarfati.com/wp-content/uploads/2016/11/shutterstock_435798619.jpg' alt="" style={{ width: "200px" }} />
                    <h3>Consultations externes</h3>
                </div>

                <div className="box">
                    <img src='https://www.erasme.ulb.ac.be/sites/default/files/styles/large/public/images/articles/2016/urgences_pres_521x293.png?itok=SYw0a_ry' alt="" style={{ width: "200px" }} />
                    <h3>Service d’Urgence</h3>
                </div>

                <div className="box">
                    <img src='https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/11/lits-de-reanimation.jpg?fit=2000%2C1155&ssl=1' alt="" style={{ width: "200px" }} />
                    <h3>réanimation</h3>
                </div>

                <div className="box">
                    <img src='https://www.ecolems.com/images/formations/paramedical/formation-agent-service-hospitalier.jpg' alt="" style={{ width: "200px" }} />
                    <h3>Services Hospitaliers</h3>
                </div>

                <div className="box">
                    <img src='https://media-exp1.licdn.com/dms/image/C4D1BAQHmyorwkCaw0g/company-background_10000/0/1547729116054?e=2147483647&v=beta&t=WRu6FfHlKGdA_yH52WsVOZ1-EwsR6Xq6AlbBQDJbNZ0' alt="" style={{ width: "200px" }} />
                    <h3>Laboratoires</h3>
                </div>

                <div className="box">
                    <img src="https://www.ch-argenteuil.fr/wp-content/uploads/2017/08/imagerie-medicale.jpg" alt="" style={{ width: "200px" }} />
                    <h3>Service de Radiologie</h3>
                </div>

                <div className="box">
                    <img src='https://www.has-sante.fr/upload/docs/image/jpeg/2012-11/pharmacien_explique_medicament.jpg' alt="" style={{ width: "200px" }} />
                    <h3>Service de Pharmacie</h3>
                </div>

                <div className="box">
                    <img src='https://www.planetesante.ch/var/ezdemo_site/storage/images/media/images/01-images-articles/rencontre_specialiste_medecine_legale/662126-1-fre-CH/rencontre_specialiste_medecine_legale_i600.jpg' alt="" style={{ width: "200px" }} />
                    <h3>Service de Med Légale</h3>
                </div>

            </div>

        </section></div>
    )
}

export default Doctors