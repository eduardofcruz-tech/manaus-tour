import './Main.css'
import imagem from '../../imagem/encontro-das-aguas.png'
import teatroamazonas from '../../imagem/teatro-amazonas.png'
import adolpholisboa from '../../imagem/mercado-adolpho-lisboa.png'
import florestaamazonica from '../../imagem/floresta-amazonica.png'
import culinaria from '../../imagem/culinaria-amazonica.png'

function Main() {
    return (
        <article className='article'>

            <h2 className='h2-article'>Desvende o Encanto Único de Manaus</h2>
            <p>Manaus, a joia da Amazônia, atrai viajantes de todo o mundo com sua aura misteriosa e exuberante. Mas o que torna essa cidade tão especial, a ponto de figurar nos sonhos de tantos exploradores?</p>
            <p>A resposta reside na fusão singular de experiências que Manaus oferece: aventura na selva profunda, encontro com culturas ancestrais e a vibrante energia de uma metrópole amazônica. Mergulhe conosco nas maravilhas que fazem de Manaus um destino inesquecível.</p>

            <h2 className='h2-article'>O Encontro das Águas</h2>
            <p>Um espetáculo natural que desafia a lógica, o Encontro das Águas é onde o rio Negro, de águas escuras, e o rio Solimões, de águas barrentas, correm lado a lado sem se misturar por quilômetros. Essa maravilha visual, acessível por passeios de barco, revela a grandiosidade da natureza amazônica e a complexidade de seus ecossistemas.</p>



            <figure className='imagens'>
                <img src={imagem} alt="Encontro das Águas"></img>
                <figcaption>Fonte: agenciacenarium.com.br</figcaption>
            </figure>

            <h2 className='h2-article'>O Teatro Amazonas</h2>
            <p>Erguido durante o apogeu da borracha, o Teatro Amazonas é um monumento à opulência e à cultura. Com sua arquitetura neoclássica e interior luxuoso, o teatro transporta os visitantes para uma era de riqueza e sofisticação. As apresentações de ópera, música e dança que ali ocorrem celebram a arte e a história da região.</p>

            <figure className='imagens'>
                <img src={teatroamazonas} alt="Teatro Amazonas"></img>
                <figcaption>Fonte: leblogdoperol.com</figcaption>
            </figure>

            <h2 className='h2-article'>O Mercado Adolpho Lisboa</h2>
            <p>Um caldeirão de cores, aromas e sabores, o Mercado Adolpho Lisboa é o coração pulsante de Manaus. Nele, você encontra produtos regionais, artesanato indígena, peixes exóticos e frutas da Amazônia. Caminhar por seus corredores é uma imersão na cultura local e uma oportunidade de experimentar a autenticidade da vida amazônica.</p>

            {/* <figure className='imagens'>
                <img src={adolpholisboa} alt="Mercado Adolpho Lisboa"></img>
                <figcaption>Fonte: vanguardadonorte.com.br</figcaption>
            </figure> */}

<figure className='imagens'>
                <img src={adolpholisboa} alt="Floresta Amazônica"></img>
                <figcaption>Fonte: observatorio3setor.org.br</figcaption>
            </figure>

            <h2 className='h2-article'>A Floresta Amazônica</h2>
            <p>Manaus é a porta de entrada para a maior floresta tropical do mundo. Expedições guiadas levam os aventureiros a explorar a selva, observar a fauna e flora exuberantes, pescar pirarucus e vivenciar a cultura das comunidades ribeirinhas. A experiência de dormir em redes sob o céu estrelado da Amazônia é inigualável.</p>

            <figure className='imagens'>
                <img src={florestaamazonica} alt="Floresta Amazônica"></img>
                <figcaption>Fonte: observatorio3setor.org.br</figcaption>
            </figure>

            <h2 className='h2-article'>A Culinária Amazônica</h2>
            <p>A gastronomia de Manaus é uma explosão de sabores exóticos. Experimente o tacacá, o pirarucu, o tambaqui e as frutas regionais como o cupuaçu e o açaí. Os restaurantes locais oferecem desde pratos tradicionais até criações contemporâneas que celebram os ingredientes da Amazônia.</p>

            <figure className='imagens'>
                <img src={culinaria} alt="Culinária Amazônica"></img>
                <figcaption>Fonte: observatorio3setor.org.br</figcaption>
            </figure>

            <p>Manaus é mais do que um destino turístico; é uma jornada para o coração da Amazônia, onde a natureza, a cultura e a história se entrelaçam para criar uma experiência transformadora.</p>

        </article>

      
    )
}

export default Main