import { useState } from 'react';

const HomeDresscode = () => {
  const womenColors = ['#868F74', '#BDC29F', '#8496A2', '#898989'];
  const menColors = ['#393939', '#26303A', '#000000', '#24311E'];

  const [showFullscreen, setShowFullscreen] = useState('');

  return (
    <div className="home__dresscode dresscode" id='dresscode'>
      {showFullscreen !== '' && (
        <div
          style={{ backgroundColor: showFullscreen }}
          className="dresscode__fullscreen-color"
          onClick={() => setShowFullscreen('')}
        >
          <div className="dresscode__hint">Нажмите на экран еще раз, чтобы скрыть цвет</div>
        </div>
      )}
      <div className="dresscode__heading home__section-heading">Дресс-код</div>
      <div className="dresscode__description">
        Мы очень ждем и с удовольствием готовимся к нашему незабываемому дню. Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в палитре торжества.
      </div>
      <div className="dresscode__container">
        <div className="dresscode__colors-container">
          <div className="dresscode__wrapper">
            <div className="dresscode__title">Мужчины</div>
            <div className="dresscode__colors">
              {menColors.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  key={color}
                  className="dresscode__color-item"
                  onClick={() => setShowFullscreen(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="dresscode__wrapper">
            <div className="dresscode__title">Девушки</div>
            <div className="dresscode__colors">
              {womenColors.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  key={color}
                  className="dresscode__color-item"
                  onClick={() => setShowFullscreen(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="dresscode__hint">Нажмите на цвет, чтобы развернуть его на весь экран</div>

        <div className="dresscode__mobile-camera">
          
        </div>
      </div>
    </div>
  );
};

export default HomeDresscode;
