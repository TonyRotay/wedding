import map from '/src/assets/map.png';
import car from '/src/assets/car.png';
import dish from '/src/assets/dish.png';
import music from '/src/assets/music.png';
import rings from '/src/assets/rings.png';
import weddingcake from '/src/assets/wedding-cake.png';

const HomeTiming = () => {
  return (
    <div className="home__timing timing" id='timing'>
      <h2 className="timing__heading home__section-heading">Тайминг</h2>
      <div className="timing__date">
        5 февраля 2024 года
      </div>
      <ul className="timing__list">
        <li className="timing__item">
          <img
            src={map}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Сбор гостей</div>
            <div className="timing__time">14:00</div>
          </div>
        </li>
        <li className="timing__item">
          <img
            src={rings}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Церемония</div>
            <div className="timing__time">15:00</div>
          </div>
        </li>
        <li className="timing__item">
          <img
            src={dish}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Банкет</div>
            <div className="timing__time">15:30</div>
          </div>
        </li>
        <li className="timing__item">
          <img
            src={weddingcake}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Вынос торта</div>
            <div className="timing__time">20:30</div>
          </div>
        </li>
        <li className="timing__item">
          <img
            src={music}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Дискотека</div>
            <div className="timing__time">21:00</div>
          </div>
        </li>
        <li className="timing__item">
          <img
            src={car}
            alt=""
            className="timing__icon"
          />
          <div className="timing__item-container">
            <div className="timing__title">Окончание</div>
            <div className="timing__time">22:30</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeTiming;
