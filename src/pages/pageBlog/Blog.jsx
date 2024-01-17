import "./Blog.css"

import Banner from "../../components/Banner/Banner.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import Card from "../../components/Card/Card.jsx";

import HTML from "../../asset/image/blog/html.jpeg"
import Google from "../../asset/image/blog/google.jpeg"
import Design from "../../asset/image/blog/Design.jpeg"
import app from "../../asset/image/blog/app.jpeg"
import reference from "../../asset/image/blog/reference.jpeg"
import Vente from "../../asset/image/blog/vente.png"


export default function Blog() {
    return(
    <main>
        {/* Banner components */}
        <Banner/>
        <TitleSection
            title="Blog"
            presentation="Retrouvez ici quelques articles sur le développement web."
        />
        <section className="blog-section container">
            <div className="row">
                <div className="col-12">
                    {/* Card container */}
                    <div className="row blogcard-container">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card 
                                class="blog-card"
                                title="Coder son site en HTML/CSS"
                                image={HTML}
                                imageAlt="Ecran montrant le language de balisage HTML5"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-22">Publié le 22 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Vendre ses produits sur le web"
                                image={Vente}
                                imageAlt="Image montrant deux main"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-20">Publié le 20 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Se positionner sur Google"
                                image={Google}
                                imageAlt="Image montrant une personne sur un ordinateur portable faisant une recherche google"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"                                textButton="Lire la suite"
                                footer={<time dateTime="2022-08-1">Publié le 1 août 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Coder en responsive design"
                                image={Design}
                                imageAlt="images montrant du code"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-31">Publié le 31 juillet 2022</time>}
                            /> 
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Techniques de référencement"
                                image={reference}
                                imageAlt="Image montrant un ordinateur"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-30">Publié le 30 juillet 2022</time>}
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 blogcard-container__card-container">
                            <Card
                                class="blog-card"
                                title="Aprendre à coder"
                                image={app}
                                imageAlt="Image montrant deux individu apprenant a coder potentiellement en peers to peers"
                                text="Some quick example text to build on the card title and make up the bulk of the card's content"
                                textButton="Lire la suite"
                                footer={<time dateTime="2022-07-12">Publié le 12 juillet 2022</time>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}