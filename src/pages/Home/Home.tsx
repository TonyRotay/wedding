import HomeCTA from './home__cta/home__cta';
import HomeDetails from './home__details/home__details';
import HomeDresscode from './home__dresscode/home__dresscode';
import HomeFooter from './home__footer/home__footer';
import HomeForm from './home__form/home__form';
import HomeLocation from './home__location/home__location';
import HomeTiming from './home__timing/home__timing';

const Home = () => {
  return (
    <div className="page home">
      <HomeCTA />
      <div className="home__container">
        <nav className="home__nav nav">
          <ul className="nav__list">
            <li
              className="nav__item"
              onClick={() => {
                document.getElementById('timing')!.scrollIntoView();
              }}
            >
              Тайминг
            </li>
            <li
              className="nav__item"
              onClick={() => {
                document.getElementById('location')!.scrollIntoView();
              }}
            >
              Локация
            </li>
            <li
              className="nav__item"
              onClick={() => {
                document.getElementById('dresscode')!.scrollIntoView();
              }}
            >
              Дресс-код
            </li>
            <li
              className="nav__item"
              onClick={() => {
                document.getElementById('details')!.scrollIntoView();
              }}
            >
              Детали
            </li>
            <li
              className="nav__item"
              onClick={() => {
                document.getElementById('form')!.scrollIntoView({behavior: 'smooth'});
              }}
            >
              Анкета
            </li>
          </ul>
        </nav>
        <HomeTiming />
        <HomeLocation />
        <HomeDresscode />
        <HomeDetails />
        <HomeForm />
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
