import React from 'react';
import { tw } from 'twind';
import * as Survey from 'survey-react'; // import surveyjs
import { questions } from './content'; // these are the survey questions
import * as widgets from 'surveyjs-widgets';
import 'nouislider/distribute/nouislider.min.css';
import 'survey-react/modern.min.css';

const SurveyComponent = () => {
  widgets.nouislider(Survey);
  Survey.surveyLocalization.defaultLocale = 'ru';
  // Apply theme
  Survey.StylesManager.applyTheme('modern');

  // Create a modal
  const survey = new Survey.Model(questions);

  // Save survey state to local storage
  survey.sendResultOnPageNext = true;
  survey.focusFirstQuestionAutomatic = false;
  survey.focusOnFirstError = false;
  const storageName = 'SurveyNextjs';
  function saveSurveyData(survey: any) {
    let data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageName, JSON.stringify(data));
  }
  survey.onPartialSend.add(function (survey) {
    saveSurveyData(survey);
  });
  const prevData = window.localStorage.getItem(storageName) || null;
  if (prevData) {
    let data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  const handleSubmit = async () => {
    const res = await fetch(`/api/form-survey`, {
      body: JSON.stringify(survey.data),
      headers: {
        'Content-Type': `application/json`,
      },
      method: `POST`,
    });
    const { error } = await res.json();
    if (error) {
      console.log('Error on fetch data');
      return;
    }
  };

  // Save data on survey complete
  survey.onComplete.add(function (survey, options) {
    saveSurveyData(survey);
    // window.location.href = "/survey/finish";
    handleSubmit();
  });

  // Render the survey
  return (
    <section id="survey" className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-xl mx-auto py-4 px-6 sm:p-6 lg:p-8`)}>
        <div className={tw(`mb-4 text-center`)}>
          <p className={tw(`text-xl text-yellow-600 font-semibold tracking-wide uppercase`)}>Узнайте за 3 минуты</p>
          <p className={tw(`text-xl tracking-tight text-gray-900`)}>стоимость отделки вашего помещения</p>
        </div>
        <div className={tw(`mx-2`)}>
          <p className={tw(`leading-loose font-semibold text-gray-500`)}>Ответьте на 6 вопросов и получите:</p>
          <p className={tw(`leading-loose text-gray-500`)}>1) Предварительный проект ремонта</p>
          <p className={tw(`leading-loose text-gray-500`)}>2) Сметную стоимость работ и материалов «под ключ»</p>
          <p className={tw(`leading-loose text-gray-500`)}>3) Подарок за экономию нашего времени</p>
        </div>
        <style jsx global>{`
          .sv-root-modern .sv-btn--navigation {
            background-color: rgb(217, 119, 6);
          }
          .sv-question__header--location--top {
            background-color: rgb(217, 119, 6);
          }
          .sv-root-modern .sv-question__title--answer {
            background-color: rgb(217, 119, 6);
          }
          .sv-title {
            color: white;
            font-family: Inter, ui-sans-serif;
            font-weight: 500;
            font-size: 1em;
          }
          .sv-root-modern .sv-progress__bar {
            background-color: rgb(217, 119, 6);
          }
          .sv-progress__text {
            font-weight: inherit;
          }
          .noUi-connect {
            background: rgb(217, 119, 6);
          }
          .sv-root-modern ::-webkit-scrollbar-thumb {
            background: rgb(217, 119, 6);
          }
          .sv-root-modern .sv-radio--checked .sv-radio__svg {
            border-color: rgb(217, 119, 6);
            fill: rgb(217, 119, 6);
          }
          .sv-root-modern .sv-completedpage {
            font-family: Inter, ui-sans-serif;
            color: rgb(107, 114, 128);
            background-color: rgb(255, 255, 255);
          }
          .sv-completedpage:before {
            background-color: rgb(217, 119, 6);
            -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 72 72' style='enable-background:new 0 0 72 72;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%239A9A9A;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M11.9,72c-0.6-0.1-1.2-0.3-1.8-0.4C4.2,70.1,0,64.7,0,58.6c0-15.1,0-30.1,0-45.2C0,6,6,0,13.4,0 c12,0,24,0,36,0c2.4,0,4.4,1.7,4.6,4c0.2,2.4-1.3,4.4-3.6,4.9C50,9,49.7,9,49.4,9C37.6,9,25.8,9,14,9c-1.5,0-2.8,0.4-3.9,1.5 c-0.8,0.9-1.2,2-1.2,3.2c0,8.2,0,16.4,0,24.6C9,45,9,51.6,9,58.2c0,2.9,1.9,4.8,4.8,4.8c14.9,0,29.7,0,44.6,0c2.6,0,4.6-2,4.6-4.6 c0-5.9,0-11.8,0-17.7c0-2.4,1.6-4.3,3.9-4.6c2.3-0.3,4.3,1,5,3.4c0,0.1,0.1,0.2,0.1,0.2c0,6.8,0,13.6,0,20.4c0,0.1-0.1,0.3-0.1,0.4 c-0.8,5.4-4.7,9.8-10.1,11.2c-0.6,0.1-1.2,0.3-1.8,0.4C44,72,28,72,11.9,72z'/%3E%3Cpath class='st0' d='M35.9,38.8c0.4-0.4,0.5-0.7,0.7-0.9c8.4-8.4,16.8-16.8,25.2-25.2c1.9-1.9,4.5-2,6.3-0.4 c1.9,1.6,2.1,4.6,0.4,6.4c-0.2,0.2-0.3,0.3-0.5,0.5c-9.5,9.5-19.1,19.1-28.6,28.6c-2.2,2.2-4.8,2.2-7,0 c-5.1-5.1-10.2-10.2-15.4-15.4c-1.3-1.3-1.7-2.8-1.2-4.5c0.5-1.7,1.6-2.8,3.4-3.1c1.6-0.4,3.1,0.1,4.2,1.3c4,4,7.9,7.9,11.9,11.9 C35.6,38.2,35.7,38.5,35.9,38.8z'/%3E%3C/g%3E%3C/svg%3E%0A");
            background-image: none;
          }
        `}</style>
        <Survey.Survey model={survey} />
      </div>
    </section>
  );
};

export default SurveyComponent;
