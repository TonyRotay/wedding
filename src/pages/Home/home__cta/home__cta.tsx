import { useEffect } from 'react';

const HomeCTA = () => {
 
  const PersonalizedLinks = [
    {
      name: 'Дорогие мама и папа',
      pronounce: 'вас',
      id: 0,
    },
    {
      name: 'Кирилл',
      pronounce: 'тебя',
      id: 1,
    },
    {
      name: 'Дорогие бабушка и дедушка',
      pronounce: 'вас',
      id: 2,
    },
    {
      name: 'Дорогие дядя и тетя',
      pronounce: 'вас',
      id: 3,
    },
    {
      name: 'Лиза и Кирилл',
      pronounce: 'вас',
      id: 4,
    },
    {
      name: 'Коля',
      pronounce: 'тебя',
      id: 5,
    },
    {
      name: 'Ксюша',
      pronounce: 'тебя',
      id: 6,
    },
    {
      name: 'Дорогая бабушка',
      pronounce: 'тебя',
      id: 7,
    },
    {
      name: 'Дорогой дедушка',
      pronounce: 'тебя',
      id: 8,
    },
    {
      name: 'Настя и Федя',
      pronounce: 'вас',
      id: 9,
    },
    {
      name: 'Татьяна Экономовна',
      pronounce: 'тебя',
      id: 10,
    },
    {
      name: 'Катя и Сережа',
      pronounce: 'вас',
      id: 11,
    },
    {
      name: 'Полина',
      pronounce: 'тебя',
      id: 12,
    },
    {
      name: 'Маша',
      pronounce: 'тебя',
      id: 13,
    },
    {
      name: 'Влада',
      pronounce: 'тебя',
      id: 14,
    },
    {
      name: 'Артем и Саша',
      pronounce: 'вас',
      id: 16,
    },
    {
      name: 'Ян и Миля',
      pronounce: 'вас',
      id: 17,
    },
    {
      name: 'Дима',
      pronounce: 'тебя',
      id: 18,
    },
    {
      name: 'Джамиль',
      pronounce: 'тебя',
      id: 19,
    },
    {
      name: 'Тимофей',
      pronounce: 'тебя',
      id: 20,
    },
    {
      name: 'Никита',
      pronounce: 'тебя',
      id: 21,
    },
    {
      name: 'Илья и Катя',
      pronounce: 'вас',
      id: 22,
    },
    {
      name: 'Олег',
      pronounce: 'тебя',
      id: 23,
    },
    {
      name: 'Максим',
      pronounce: 'тебя',
      id: 24,
    },
    {
      name: 'Валера и Аня',
      pronounce: 'вас',
      id: 25,
    },
    {
      name: 'Аня и Саша',
      pronounce: 'вас',
      id: 26,
    },
    {
      name: 'Кирилл',
      pronounce: 'тебя',
      id: 27,
    },
    {
      name: 'Таня',
      pronounce: 'тебя',
      id: 28,
    },
    {
      name: 'Саша',
      pronounce: 'тебя',
      id: 29,
    },
    {
      name: 'Слава',
      pronounce: 'тебя',
      id: 30,
    },
  ];

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  function getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp(
        /*eslint-disable*/
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  useEffect(() => {
    if (id) {
      document.cookie = `id=${id}; path=/;`;
    }
  }, []);

  const title = id
    ? PersonalizedLinks.find((el) => el.id === Number(id)) ? PersonalizedLinks.find((el) => el.id === Number(id))!.name : 'Дорогие гости'
    : getCookie('id')
    ? PersonalizedLinks.find((el) => el.id === Number(getCookie('id')))?.name
    : 'Дорогие гости';

  const pronounce = id
    ? PersonalizedLinks.find((el) => el.id === Number(id)) ? PersonalizedLinks.find((el) => el.id === Number(id))!.pronounce : 'Дорогие гости'
    : getCookie('id')
    ? PersonalizedLinks.find((el) => el.id === Number(getCookie('id')))?.pronounce
    : 'вас';

  return (
    <div className="home__cta cta">
      <div className="cta__container">
        <h1 className="cta__heading">{title}!</h1>
        <p className="cta__paragrapgh">
          Приглашаем {pronounce} разделить с нами радостный день нашей свадьбы в кругу самых близких
          нам людей. <br /> Свадьба состоится
        </p>
        <h1 className="cta__heading2">5 февраля 2024 года</h1>
        <h2 className="cta__paragrapgh">С любовью, Антон и Юлия ♥</h2>
      </div>
      <div className="cta__icon">
        <p className="cta__hint">Крути вниз, чтобы узнать подробнее о нашем празднике</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.831 13.7567C11.2416 13.3873 11.8738 13.4205 12.2433 13.831L16 18.0052L19.7567 13.831C20.1262 13.4205 20.7585 13.3873 21.169 13.7567C21.5795 14.1262 21.6128 14.7585 21.2433 15.169L16.7433 20.169C16.5537 20.3797 16.2835 20.5 16 20.5C15.7165 20.5 15.4464 20.3797 15.2567 20.169L10.7567 15.169C10.3873 14.7585 10.4205 14.1262 10.831 13.7567Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeCTA;
