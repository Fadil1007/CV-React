import "./Realisation.css"
import Card from "../../components/Card/Card.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import imageportfolio from "../../asset/image/portfolio.jpeg";
import probeat from "../../asset/image/probeat.png";
import commentaire from "../../asset/image/commentaire.png";

export default function Realisation() {
    return(
        <main>
            {/* Banner image */}
            <Banner/>
            {/* Title section */}
            <TitleSection 
                title="PORTFOLIO" 
                presentation="Voici quelques-unes de mes réalisations."/>
                
            {/* Portfolio card section */}
            <section className="portfolio-section container">
                <div className="row">
                    <div className="col-12 portfolio-section__container">
                        <div className="row portfolio-section__card-container">
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card
                                    class="project-card"
                                    title="Portfolio"
                                    image={imageportfolio}
                                    imageAlt="Image du projet Portfolio"
                                    text="Projet réalisé en tant que devoir pour le Centre Européen de Formation (CEF)."
                                    link="https://github.com/Fadil1007/Portfolio-projet.git"
                                    textButton="voir"
                                    footer="Site réaliser avec HTML5, CSS3, JavaScript , Vue JS"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="Maquettage du site Probeat"
                                    image={probeat}
                                    imageAlt="Image du projet de Maquettage du site Probeat "
                                    text="Projet réalisé en tant que devoir pour le Centre Européen de Formation (CEF)."
                                    link="https://github.com/Fadil1007/site-probeat-CEF.git"
                                    textButton="voir"
                                    footer="Site realiser avec Figma"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="Espace commentaire"
                                    image={commentaire}
                                    imageAlt="commentaire"
                                    text="Projet réalisé en tant que devoir pour le Centre Européen de Formation (CEF)."
                                    link="https://github.com/Fadil1007/Commentaire-espace-devoir.git"
                                    textButton="voir"
                                    footer="Site realisé avec HTML5, CSS3 et JavaScript"
                                />
                            </div>
                            
                            
                            
                            </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}