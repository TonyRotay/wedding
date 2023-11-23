const HomeDetails = () => {
  return (
    <div className="home__details details" id='details'>
      <div className="details__heading home__section-heading">Детали</div>
      <div className="details__description">
        На нашем празднике есть ряд ограничений со стороны площадки и наших пожеланий, которые мы
        просим вас соблюсти, чтобы свадьба получилась комфортной для всех.
      </div>
      <div className="details__container">
        <div className="details__item">
          <div className="details__paragraph">
            На площадке <span>ЗАПРЕЩЕНО</span> использовать фейерверки, хлопушки, конфетти и другую
            пиротехнику.
          </div>
        </div>
        <div className="details__item">
          <div className="details__paragraph">
            На площадке <span>ЗАПРЕЩЕНО</span> запускать дроны, квадракоптеры.
          </div>
        </div>
        <div className="details__item">
          <div className="details__paragraph">Просим обойтись без криков "Горько!"</div>
        </div>
        <div className="details__item">
          <div className="details__paragraph">
            Будем признательны за выбор подарка в конверте ;)
          </div>
        </div>
        <div className="details__item">
          <div className="details__paragraph">
            На площадке будет гардеробная, где вы сможете переодеться из зимней одежды в более
            комфортную.
          </div>
        </div>
      </div>
      <div className="details__hint">
        По вопросам, связанным с организацией нашей свадьбы вы можете обратиться к нашему организатору Ксении по телефону <a href='tel: +79651963883'>+79651963883</a>
      </div>
    </div>
  );
};

export default HomeDetails;
