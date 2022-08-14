export const questions = {
  showQuestionNumbers: 'off',
  focusFirstQuestionAutomatic: 'false',
  focusOnFirstError: 'false',
  showProgressBar: 'bottom',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'radiogroup',
          name: 'kvartira',
          title: 'Какая у вас квартира',
          isRequired: true,
          colCount: 1,
          choices: ['Студия', 'Однокомнатная', 'Двухкомнатная', 'Трехкомнатная', '4+'],
        },
      ],
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'nouislider',
          name: 'ploshad',
          title: 'Укажите площадь вашей квартиры',
          isRequired: true,
          rangeMin: 20,
          rangeMax: 132,
        },
      ],
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'radiogroup',
          name: 'class',
          title: 'Какой класс ремонта вас интересует?',
          isRequired: true,
          colCount: 1,
          choices: ['Эконом - 4800 руб./кв.м', 'Комфорт - 5500 руб./кв.м', 'Премиум - 8000 руб./кв.м'],
        },
      ],
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'radiogroup',
          name: 'budget',
          title: 'В какой бюджет вы хотите уложиться?',
          isRequired: true,
          colCount: 1,
          choices: ['До 200 000 рублей', '200 000 - 300 000 рублей', '300 000 - 400 000 рублей', '400 000 - 500 000 рублей', '500 000 - 600 000 рублей', '600 000 - 700 000 рублей', '750 000 - 800 000 рублей', 'Больше 800 000 рублей'],
        },
      ],
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'radiogroup',
          name: 'kogda',
          title: 'Когда вы планируете приступить к ремонту?',
          isRequired: true,
          colCount: 1,
          choices: ['В ближайшие дни', 'В течении месяца', 'В ближайшие полгода', 'Через год', 'Пока не планирую'],
        },
      ],
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'html',
          name: 'info',
          html: '<h3>Для вас идет расчет... Вы узнаете стоимость ремонта по телефону в течении 3 минут - укажите ваши контакты</h3>',
        },
        {
          type: 'radiogroup',
          name: 'podarok',
          title: 'Выберите ваш подарок',
          isRequired: true,
          colCount: 1,
          choices: ['Тёплый пол (5 кв.м.)', 'Входная дверь'],
        },
        {
          type: 'text',
          name: 'name',
          title: 'Имя',
          isRequired: true,
          placeHolder: 'Ваше имя',
          autoComplete: 'name',
        },
        {
          type: 'text',
          name: 'phone',
          title: 'Телефон',
          isRequired: true,
          placeHolder: 'Ваш телефон',
          autoComplete: 'phone',
        },
      ],
    },
  ],
};
