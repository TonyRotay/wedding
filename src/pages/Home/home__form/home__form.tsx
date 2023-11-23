import axios from 'axios';
import { useState } from 'react';

const HomeForm = () => {
  // const presenceVariants = ['Обязательно приду', 'К сожалению, придти не смогу']
  const [presence, setPresence] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState('');
  const [drinks, setDrinks] = useState<string[]>([]);
  const [other, setOther] = useState('');

  const drinksTitles = [
    'Вино красное',
    'Вино белое',
    'Шампанское',
    'Водка',
    'Коньяк, виски',
    'Не пью алкоголь',
  ];

  const drinksHandler = (drink: string) => {
    const drinkIndex = drinks.indexOf(drink);

    if (drink === 'Не пью алкоголь') {
      setDrinks(['Не пью алкоголь']);
    } else {
      if (drinks.includes('Не пью алкоголь')) {
        setDrinks((prev) => {
          const arr = [...prev];
          arr.splice(drinks.indexOf('Не пью алкоголь'), 1);
          return arr;
        });
      }
      if (drinkIndex !== -1) {
        setDrinks((prev) => {
          const arr = [...prev];
          arr.splice(drinkIndex, 1);
          return arr;
        });
      } else {
        setDrinks((prev) => {
          const arr = [...prev];
          arr.push(drink);
          return arr;
        });
      }
    }
  };

  const sendFormHandler = async () => {
    await axios.post('http://37.46.130.173:8010/api/bot/send?token=4o0IQ3Ktr1M3c5iR', {
      fullname: name,
      presence,
      alcohol: drinks.join(', '),
      other,
    });
    alert('Спасибо за ответ! Это поможет нам сделать наш праздник еще лучше!');
  };

  return (
    <div
      className="home__form form"
      id="form"
    >
      <div className="form__heading home__section-heading">Анкета</div>
      <div className="form__description">
        Подтвердите свое присутствие на торжестве, заполнив эту небольшую анкету. Ответы помогут нам
        в организации нашего праздника. <br /> Ответ будем ждать до 15 декабря 2023.
      </div>
      <div className="form__form">
        <div className="form__container">
          <div className="form__title">Имя и фамилия</div>
          <input
            type="text"
            className="form__input"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
        </div>
        <div className="form__container">
          <div className="form__title">Присутствие</div>
          <div className="form__variants">
            <div
              className={`form__radio ${presence === true ? 'form__radio_active' : ''}`}
              onClick={() => setPresence(true)}
            >
              Обязательно приду
            </div>
            <div
              className={`form__radio ${presence === false ? 'form__radio_active' : ''}`}
              onClick={() => setPresence(false)}
            >
              К сожалению, не приду
            </div>
          </div>
        </div>

        <div className="form__container">
          <div className="form__title">Предпочтения в напитках</div>
          <div className="form__variants">
            {drinksTitles.map((drink) => (
              <div
                key={drink}
                onClick={() => drinksHandler(drink)}
                className={`form__checkbox ${
                  drinks.includes(drink) ? 'form__checkbox_active' : ''
                }`}
              >
                {drink}
              </div>
            ))}
          </div>
        </div>
        <div className="form__container">
          <div className="form__title">Дополнительная информация</div>
          <div className="form__subtitle">
            Напишите о продуктах, вызывающих у вас аллергическую реакцию или других важных для вас
            деталях, чтобы мы могли учесть их при подготовке к празднику.
          </div>
          <textarea
            className="form__textarea"
            value={other}
            onChange={(ev) => {
              setOther(ev.target.value);
            }}
          />
        </div>
        <div className="form__button-container">
          <button
            className="form__button"
            onClick={sendFormHandler}
          >
            Отправить ответ
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
