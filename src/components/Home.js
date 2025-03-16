import './Home.css';

function Home() {
  return (
    <section className="Home">
      <header className="home-header">

        <div className='home-logo'>Manaus Tour</div>

        <nav className='home-nav'>
          <ul className='home-list'>
            <li className='home-list-item'>
              <a className='home-list-link' href='#'>Explorar</a>
            </li>
            <li className='home-list-item'>
              <a className='home-list-link' href='#'>Contato</a>
            </li>
          </ul>
        </nav>

      </header>
    </section>
  );
}

export default Home;
