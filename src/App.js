import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <header className = "header">
      <div className="App">
        <div className = "header-menu">
          <ul>
            <li><a href = "/">Главная</a></li>
            <li><a href = "/Работа и навыки">Работа и навыки</a></li>
            <li><a href = "/Отзывы">Отзывы</a></li>
            <li><a href = "/Контакты">Контакты</a></li>
            <li className ="sign-in"><a href = "/">Войти</a></li>
          </ul>
        </div>
      </div>
      <div className = "header-text">
        <p>
          Получить детальный специфичный список вопросов для интервью, чтобы выбрать самого подходящего специалиста
        </p>
      </div>
      <div className = "header-search-panel">
        <p>Поиск по вакансии, навыкам</p>
        <input type = "text" placeholder = "Введите вакансию или навык"></input>
      </div>
    </header>
    <body>
      <div className = "body-title">
        <h1>
          Работа и навыки
        </h1>
        <p>Выбирете одну из популярных категорий для поиска</p>
      </div>
      <div className = "body-category">
        <input type = "button" value = "Бугалтерия и финансы"></input>
        <input type = "button" value = "Дизайн и креативность"></input>
        <input type = "button" value = "Программирование"></input>
      </div>
      <div className = "body-category-2">
        <input type = "button" value = "Производство и операции"></input>
        <input type = "button" value = "Тренинг и оброзование"></input>
        <input type = "button" value = "Услуги консультации"></input>
      </div>
      <div className = "main-text-bottom">
        <h1>Присоеденяйтесь к нам !</h1>
        <p>Создавайте аккаунт и зовите друзей</p>
      </div>
      <div className = "rez-title">
        <h1>Рецензии</h1>
      </div>
      <div className = "rez">
        <input type = "button" value = "Рецензия"></input>
        <input type = "button" value = "Рецензия"></input>
        <input type = "button" value = "Рецензия"></input>
      </div>
    </body>
    <footer className = "footer">
      <div className = "footer-title">
        <h1>Начните прямо сейчас !</h1>
      </div>
      <div className = "email">
        <a href = "/HELP@RABOTA.RU">HELP@RABOTA.RU</a>
      </div>
      <div className = "number">
        <a href = "/8-800-555-35-35s">8 800 555 35 35</a>
      </div>
    </footer>
    </>
  );
}

export default App;
