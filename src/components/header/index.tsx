import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Real from '@/constants/svg/real.svg';
import Izumrud from '@/constants/svg/izum.svg';
import Lazur from '@/constants/svg/lazur.svg';
import Acvarel from '@/constants/svg/acvarel.svg';
import NextLink from 'next/link';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Ремонт квартир в Геленджике
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Узнайте стоимость ремонта квартиры в Геленджике под ключ
        </p>
      </div>
      <div className={tw(`mt-10 flex flex-wrap justify-center items-center text-center mx-auto`)}>
        <div className={tw(`w-full sm:(w-1/3 text-right)`)}>
          <NextLink href="/zamer" passHref>
            <a>
              <Button primary>Вызвать замерщика</Button>
            </a>
          </NextLink>
        </div>
        <div className={tw(`w-full py-2 sm:w-1/6`)}>
          <span className={tw(`mx-2`)}> </span>
        </div>
        <div className={tw(`w-full sm:(w-1/3 text-left)`)}>
          <NextLink href="/calculator" passHref>
            <a>
              <Button>Онлайн-калькулятор</Button>
            </a>
          </NextLink>
        </div>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Работаем на всех ЖК</p>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Включая</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Acvarel className={tw(`m-12 mb-8`)} width={120} />
          <Real className={tw(`m-12`)} width={140} />
          <Izumrud className={tw(`m-12`)} width={140} />
          <Lazur className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
