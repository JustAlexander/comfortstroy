import { tw } from 'twind';
import Image from 'next/image';

const Equipment = () => (
  <section id="equipment" className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`max-w-7xl mx-auto py-4 px-6 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Оборудование</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Используем новейшее оборудование для ремонта</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full md:w-1/2 pb-8 md:p-4 lg:w-1/4 lg:p-4`)}>
            <div className={tw(`h-64 z-20 relative mb-5`)}>
              <Image src="/images/zatirka.avif" alt="Затирка для пола" className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
            </div>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`text-xl`)}>Затирка для пола</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Вибромашина которая предназначена для уплотнения полусухой стяжки. Работает в паре с пневмонагнетателем.</p>
          </div>
          <div className={tw(`w-full pt-8 pb-8 md:w-1/2 md:p-4 lg:w-1/4 lg:p-4`)}>
            <div className={tw(`h-64 z-20 relative mb-5`)}>
              <Image src="/images/shtukaturka.avif" alt="Затирка для пола" className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
            </div>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`text-xl`)}>Механизированная штукатурка</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>Устройство замешивает раствор штукатурки, затем штукатурный раствор подаётся под давлением, необходимым для равномерного распределения.</p>
          </div>
          <div className={tw(`w-full pt-8 pb-8 md:w-1/2 md:p-4 lg:w-1/4 lg:p-4`)}>
            <div className={tw(`h-64 z-20 relative mb-5`)}>
              <Image src="/images/plitkarez.avif" alt="Затирка для пола" className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
            </div>
            <div className="flex items-center mb-6">
              <div className={tw(`text-xl`)}>Водяной плиткорез</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Водяной плиткорез, который можно использовать в неизолированных помещениях, так как от него совсем нет пыли.</p>
          </div>
          <div className={tw(`w-full pt-8 pb-8 md:w-1/2 md:p-4 lg:w-1/4 lg:p-4`)}>
            <div className={tw(`h-64 z-20 relative mb-5`)}>
              <Image src="/images/pnevma.avif" alt="Затирка для пола" className={tw(`h-full w-full object-contain overflow-hidden rounded`)} layout="fill" />
            </div>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`text-xl`)}>Пневмонагнетатель</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>Станция для полусухой стяжки. Она смешивает песок, цемент и воду и подает через рукав в квартиру полусухую смесь для стяжки.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Equipment;
