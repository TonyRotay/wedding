const HomeLocation = () => {
  return (
    <div className="home__location location" id='location'>
      <h2 className="location__heading home__section-heading">Локация</h2>
      <div className="location__container">
        <div className="location__wrapper">
          <div>
            <div className="location__title">Загородный клуб "Теплица Парк"</div>
            <div className="location__address">
              Московская область, г. Одинцово, пос. ВНИИССОК, ул. Липовая д.3
            </div>
          </div>
          <div className="location__hint">
            На площадке есть парковка, но лучше приезжайте на такси ;)
          </div>
        </div>

        <iframe
          className="location__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7ddf9f45006ca62f899a668534cce517833778b7b0d4d7508a92a506654a5ae&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeLocation;
