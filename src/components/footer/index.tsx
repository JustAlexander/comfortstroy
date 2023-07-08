import { tw } from 'twind';
import ButtonSubmit from '@/components/buttonSubmit';
import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import { E164Number } from 'libphonenumber-js/types';
import NextLink from 'next/link';
import Image from 'next/image';

const productLinks = [
  {
    lable: `Особенности`,
    href: `/#features`,
  },
  {
    lable: `Фотографии`,
    href: `/foto`,
  },
  {
    lable: `Цена`,
    href: `/#price`,
  },
  {
    lable: `Отзывы`,
    href: `https://search.google.com/local/reviews?placeid=ChIJEQVINeWK8UARhLtvDFD3ZAU`,
  },
];
const aboutLinks = [
  {
    lable: `Краснодар`,
    href: `/`,
  },
  {
    lable: `Кубанская набережная, 64`,
    href: `https://goo.gl/maps/AW5ANHqFQhnb3K7j7`,
  },
  {
    lable: `info@comfortstroy.pro`,
    href: `mailto:info@comfortstroy.pro`,
  },
  {
    lable: `+7(988)347-42-17`,
    href: `tel:+79883474217`,
  },
];
const resourceLinks = [
  {
    lable: `Узнать стоимость`,
    href: `/zamer`,
  },
  {
    lable: `Онлайн-калькулятор`,
    href: `/calculator`,
  },
];

const Footer = () => {
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [errors, setErrors] = useState(false);
  const [buttonText, setButtonText] = useState(`Отправить`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = false;
    let isValid = true;
    if (String(phone).length <= 0) {
      tempErrors = true;
      isValid = false;
      setErrors(tempErrors);
      return isValid;
    }
    if (!isValidPhoneNumber(String(phone))) {
      tempErrors = true;
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidForm = handleValidation();
    if (isValidForm) {
      setButtonText(`Отправка...`);
      const res = await fetch(`/api/sendgrid`, {
        body: JSON.stringify({
          phone,
        }),
        headers: {
          'Content-Type': `application/json`,
        },
        method: `POST`,
      });
      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText(`Отправить`);
        // Reset form fields
        setPhone(``);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText(`Отправить`);
      // Reset form fields
      setPhone(``);
    }
  };

  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-6 lg:px-8 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <NextLink href="/" passHref>
            <a>
              <Image className={tw(`h-12 w-52`)} src="/logo.svg" alt="logo" width={208} height={48} />
            </a>
          </NextLink>
        </div>
        <div className={tw(`w-full lg:w-1/2`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Меню</h4>
                <ul>
                  {productLinks.map((link) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.lable}>
                      <NextLink href={link.href} passHref>
                        <a>{link.lable}</a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Поддержка</h4>
                <ul>
                  {resourceLinks.map((link) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.lable}>
                      <NextLink href={link.href} passHref>
                        <a>{link.lable}</a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Контакты</h4>
                <ul>
                  {aboutLinks.map((link) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.lable}>
                      <NextLink href={link.href} passHref>
                        <a>{link.lable}</a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={tw(`w-full mt-12 lg:mt-0`)}>
            <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Обратный звонок</h4>
              <div className={tw(`flex w-full`)}>
                <PhoneInput defaultCountry="RU" aria-label="Номер телефона" value={phone} onChange={setPhone} name="phone" placeholder="Номер телефона" className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2 text-sm`)} />
                <ButtonSubmit>{buttonText}</ButtonSubmit>
              </div>
              {errors && <p className={tw(`text-red-500 pt-2 text-sm`)}>Телефонный номер введен не верно</p>}
            </div>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p id="formSendOk" className={tw(`text-green-500 font-semibold text-sm my-2`)}>
                Спасибо! Мы уже получили вашу заявку и скоро вам позвоним.
              </p>
            )}
            {showFailureMessage && <p className={tw(`text-red-500`)}>Ой! Что то пошло не так, попробуйте еще раз.</p>}
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
