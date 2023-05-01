import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';
import Image from 'next/image';
import Button from '@/components/button';

const socialProofs = [
  {
    name: `Анжела Русакова`,
    company: `ЖК Изумрудный`,
    image: `/images/avatar-1.svg`,
    text: `Купила квартиру у застройщика и оказалась в полнейшей растерянности,
    как сделать ремонт быстро и качественно?! Знакомые посоветовали фирму
    КОМФОРТ СТРОЙ ПРО. Ни на секунду не пожалела об этом решении. Всего за 3 месяца
    я получила полностью готовую квартиру. От меня потребовалось только высказать
    собственные пожелания и в срок получить желаемый ремонт. Всю головную боль в
    виду закупки материалов, общения с рабочими и т.п. компания взяла на себя. Очень
    довольна результатами и с удовольствием буду рекомендовать фирму друзьям и знакомым.`,
  },
  {
    name: `Марина Палтышева`,
    company: `ЖК Акварель`,
    image: `/images/avatar-4.svg`,
    text: `Обратились в компанию Комфорт Строй Про по рекомендации. У нас двушка в Акварели.
    Пригласили прораба и дизайнера, что бы сразу все грамотно спланировать: кухню, комнаты,
    проводку, санузлы, интерьер. Нам практически не пришлось принимать участие в процессе.
    Общались в основном с Сереем, он регулярно нам отправлял фото и видео отчеты, т.к. мы на
    время ремонта уехали. Нас сразу предупредили, еще до заключения договора, что ремонт
    затянется, т.к. начинали мы мае, а в ЖК отопления, газа не было, стояла сырость и сушить
    помещение придется тепловыми пушками. Зато, благодаря этому, нас не коснулась беда с плесенью.
    Готовый результат нам очень понравился. Будем вас рекомендовать тоже!`,
  },
  {
    name: `Надежда Ланкинен`,
    company: `Дистанционный ремонт`,
    image: `/images/avatar-3.svg`,
    text: `Нашла данную компанию через интернет. Квартиру собиралась делать дистанционно, поэтому
    сильно волновалась в правильном выборе. После общения с менеджером по телефону на мою квартиру
    был направлен прораб Сергей. Он сделал все необходимые замеры , услышал все мои пожелания по
    перепланировке и растановки мебели. На следующий день после замеров был составлен план ремонта
    и выслана мне на почту предварительная смета. После моего согласования с компанией заключили
    договор, где прописали сроки, обьем работ и сроки оплаты по этапам.
    Прораб держал меня в курсе всего ремонта фото и видеоотчетами. Работники все квалифицированные.
    Электрики, сантехники, связывались со мной для корректировки. Сергей помогал с выбором чистовых
    материалов, связывал меня с магазинами,где я дистанционно выбирала плитку и обои...  Весь ремонт
    был сделан качественно и в срок. Ставлю наивысшую оценку такой работе , потому что взаимопонимание
    было на каждом этапе работ. Ремонт был сделан без нареканий и превзошел мои ожидания!!! Спасибо
    ребята большое!!!
    Прораб у  меня был Сушков Сергей. Ремонтом осталась довольна!!!`,
  },
  {
    name: `Николай Ландик`,
    company: `Дистанционный ремонт`,
    image: `/images/avatar-2.svg`,
    text: `Выражаем благодарность работникам и, в частности, прорабу Сушкову Сергею Анатольевичу
    Комфорт Строй Про (г. Геленджик) за высокий профессионализм и качественное выполнение ремонта
    нашей квартиры. Желаем вашей фирме процветания!`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto mt-28`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`text-base pb-2 text-yellow-600 font-semibold tracking-wide uppercase`)}>Отзывы</p>
          <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Мнения наших клиентов</h2>
        </div>
        <section>
          <div className={tw(`flex flex-wrap items-center`)}>
            <div className={tw(`w-full lg:w-1/2 px-6 md:px-0 sm:p-6 lg:p-8`)}>
              <figure>
                <div className={tw(`relative bg-white`)}>
                  <Quote className={tw(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`)} />
                  <div className={tw(`pt-20 px-0 md:px-0`)}>
                    <p className={tw(`text-gray-600 text-base pb-6`)}>{socialProofs[currentIndex].text}</p>
                    <div className={tw(`flex items-center justify-between`)}>
                      <div className={tw(`flex items-center pb-12`)}>
                        <div className={tw(`h-12 w-12`)}>
                          <Image src={socialProofs[currentIndex].image} alt={socialProofs[currentIndex].name} className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)} height={48} width={48} />
                        </div>
                        <p className={tw(`text-gray-600 font-bold ml-3`)}>
                          {socialProofs[currentIndex].name} <br />
                          <span className={tw(`text-gray-600 text-base font-light`)}>{socialProofs[currentIndex].company}</span>
                        </p>
                      </div>
                      <div className={tw(`cursor-pointer flex pb-12`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={previous}>
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={next}>
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
              <div className={tw(`text-center`)}>
                <a href="https://search.google.com/local/reviews?placeid=ChIJEQVINeWK8UARhLtvDFD3ZAU" target="_blank" rel="noopener noreferrer" className={tw(`object-none object-center`)}>
                  <Button primary modifier="mt-1">
                    Все отзывы на Google Картах
                  </Button>
                </a>
              </div>
            </div>
            <div className={tw(`w-full lg:w-1/2 px-2 pt-14`)}>
              <Image width="100%" height="100%" src="/images/otzyvy.webp" layout="responsive" alt="Ремонт однокомнатной квартир в Геленджик под ключ" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
