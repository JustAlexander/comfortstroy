import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Check from '@/constants/svg/check.svg';
import NextLink from 'next/link';

export default function Header(props) {
  const headerStyle = css`
    background-color: #ffffff;
    min-height: calc(78vh - 6rem);
  `;
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-6xl mx-auto lg:pt-20 px-5 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`mt-10 font-sans uppercase font-bold text-4xl py-5 md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`)}>
          Ремонт квартир в <br /><span className={tw(`bg-yellow-600 text-gray-100`)}> {props.jk} </span>
        </h1>
        {/* <div className={tw(``)}>
          <p className={tw(`font-sans uppercase font-bold text-4xl py-5 md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`)}>Сделаем вам уютный ремонт</p>
          <p className={tw(`font-sans uppercase text-3xl md:text-4xl lg:text-5xl text-center leading-snug text-yellow-600`)}>всего за 45 дней от лучших специалистов</p>
          <p className={tw(`font-sans uppercase font-bold text-4xl py-5 md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`)}>с гарантией до 12 месяцев</p>
        </div> */}
      </div>
      <div className={tw(`max-w-6xl mx-auto px-5 flex justify-center w-full`)}>
        <div className={tw(`pt-5 w-full`)}>
          <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>по дизайн-проекту «под ключ»</p>
          <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>с подбором мебели и материалов</p>
          <div className={tw(`flex flex-wrap my-12`)}>
            <div className={tw(`w-full md:w-1/2 md:p-4 lg:w-1/4 lg:p-2`)}>
              <div className={tw(`flex mb-1`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`flex-none h-6 w-6 text-yellow-500 mt-2`)} />
                <div className={tw(`ml-4 leading-loose text-gray-500`)}>Цена не меняется и зафиксирована в договоре</div>
              </div>
            </div>
            <div className={tw(`w-full md:w-1/2 md:p-4 lg:w-1/4 lg:p-2`)}>
              <div className={tw(`flex mb-1`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`flex-none h-6 w-6 text-yellow-500 mt-2`)} />
                <p className={tw(`ml-4 leading-loose text-gray-500 `)}>Опыт работы более 25 лет, мы сможем выполнить любой проект</p>
              </div>
            </div>
            <div className={tw(`w-full md:w-1/2 md:p-4 lg:w-1/4 lg:p-2`)}>
              <div className={tw(`flex mb-1`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`flex-none h-6 w-6 text-yellow-500 mt-2`)} />
                <p className={tw(`ml-4 leading-loose text-gray-500 `)}>Собственный склад с услугой доставки материалов на объект</p>
              </div>
            </div>
            <div className={tw(`w-full md:w-1/2 md:p-4 lg:w-1/4 lg:p-2`)}>
              <div className={tw(`flex mb-1`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`flex-none h-6 w-6 text-yellow-500 mt-2`)} />
                <p className={tw(`ml-4 leading-loose text-gray-500 `)}>Гарантия 12 месяцев согласно СНиП и ГОСТ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
