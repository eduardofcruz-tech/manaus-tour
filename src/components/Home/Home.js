import './Home.css';

function Home() {
  return (
    <section className="Home">
      <header className="home-header">

        <h1 className='h1-logo'>Manaus Tour</h1>

        <nav className='home-nav'>
          <ul className='home-list'>
            <li className='home-list-item'>
              <a className='home-list-link' href='#explore'>Explorar</a>
            </li>
            <li className='home-list-item'>
              <a className='home-list-link' href='#contact'>Contato</a>
            </li>
          </ul>
        </nav>

      </header>

      <div className='home-intro'>
        <h2 className='h2-home-intro'>Manaus</h2>
        <p className='home-intro-p'>Manaus: um destino completo para todos os gostos. Aventura, cultura, história e gastronomia se unem para proporcionar uma experiência inesquecível na Amazônia.</p>
        <a className='home-intro-button' href='#explore'>Explore</a>
      </div>

      <div className='vazio'></div>

    </section>
  );
}

export default Home;
