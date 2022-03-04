import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section id="features" className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Особенности</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Подход к работе</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 pb-8 md:p-4 md:border-r lg:w-1/3 lg:p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Оплата</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Стандартно, оплата ремонта квартиры в Новороссийске под ключ, у нас разбита на 3 этапа. После заключения договора и оплаты первой части мы приступаем к работам. По завершении этапа, клиент принимает работу и оплачивает следующую часть. При необходимости, платежи за ремонт квартиры в Новороссийске под ключ, можно разбить на большее количество частей.</p>
          </div>
          <div className={tw(`w-full border-b pt-8 pb-8 md:w-1/2 md:p-4 lg:w-1/3 lg:border-r lg:p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Дистанционный ремонт</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>Вариант дистанционного ремонта квартиры в Новороссийске подойдет тем, у кого нет возможности присутствовать в городе на период работ. При этом мы будем держать вас в курсе, отправляя ежедневные фото и видео отчеты. В формате дистанционного ремонта квартиры в Новороссийске с нами сотрудничают порядка 30% клиентов.</p>
          </div>
          <div className={tw(`w-full border-b pt-8 pb-8 md:w-1/2 md:p-4 md:border-r lg:w-1/3 lg:border-r-0 lg:p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Дотавка стройматериалов</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Мы сами осуществляем закупку и доставку отделочных материалов, электрики оптовыми партиями у производителей и оптовых баз Краснодара. При желании, клиент может сам закупать стройматериал, но гарантийный срок на работы может быть скорректирован в зависимости от производителя материалов.</p>
          </div>
          <div className={tw(`w-full border-b pt-8 pb-8 md:w-1/2 md:p-4 lg:w-1/3 lg:border-r lg:border-b-0 lg:p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Вывоз мусора</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Вам не нужно будет беспокоиться о чистоте в подъезде или вывозе строительного мусора. Наши специалисты аккуратно производят подъем стройматериалов на этаж и оперативно вывозят строительный мусор.</p>
          </div>
          <div className={tw(`w-full border-b pt-8 pb-8 md:w-1/2 md:p-4 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 lg:p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Накопительные баки</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Индивидуальные баки для воды в Новороссийске устанавливают в квартирах, если данном районе города имеются проблемы с подачей воды в летнее время. Мы изготавливаем баки по индивидуальным размерам и устанавливаем их не нарушая дизайна квартиры.</p>
          </div>
          <div className={tw(`w-full pt-8 pb-8 md:w-1/2 lg:w-1/3 md:p-4 lg:p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Гарантия</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Стандартная гарантия на работы по договор составляет 12 месяцев. Если в течении этого срока, случается гарантийный случай (к примеру: отклеились обои, отошел плинтус, отпала краска и т.п.), то мы в короткий срок устраним недостатки за наш счет. В гарантию не входят форс-мажорные обстоятельства.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
