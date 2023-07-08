import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import { E164Number } from 'libphonenumber-js/types';
import ButtonSubmitZamer from '@/components/buttonSubmitZamer';

export default function FormStoimost(props) {
  const [name, setName] = useState(``);
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [errors, setErrors] = useState(false);
  const [buttonText, setButtonText] = useState(`Узнать стоимость`);
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
      const res = await fetch(`/api/form-foto`, {
        body: JSON.stringify({
          name,
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
        setButtonText(`Узнать стоимость`);
        // Reset form fields
        setPhone(``);
        setName(``);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText(`Узнать стоимость`);
      // Reset form fields
      setPhone(``);
      setName(``);
    }
  };
  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white mb-8`)}>
        <div className={tw(`sm:mb-8 text-center`)}>
          <p className={tw(`text-sm text-yellow-600 font-semibold tracking-wide uppercase`)}>Получите смету бесплатно</p>
          <h2 className={tw(`mt-2 pb-4 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900`)}>Узнайте стоимость ремонта</h2>
        </div>
        <div className={tw(`flex flex-wrap -mx-8 items-center justify-center `)}>
          <div className={tw(`w-full lg:w-1/3 px-8`)}>
            <form className={tw(`space-y-6`)} onSubmit={handleSubmit}>
              <div className={tw(`rounded-md shadow-sm -space-y-px`)}>
                <div>
                  <label htmlFor="name" className={tw(`sr-only`)}>
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    autoComplete="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    className={tw(
                      `appearance-none rounded-none relative block w-full px-3 py-2 border
                      border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                      focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm`,
                    )}
                    placeholder="Ваше имя"
                  />
                </div>
              </div>
              <div className={tw(`rounded-md shadow-sm -space-y-px`)}>
                <div>
                  <label htmlFor="phone" className={tw(`sr-only`)}>
                    Ваш телефон
                  </label>
                  <PhoneInput
                    defaultCountry="RU"
                    aria-label="Номер телефона"
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                    required
                    placeholder="Номер телефона"
                    className={tw(
                      `appearance-none rounded-none relative block w-full px-3 py-2 border
                      border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md
                      focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm`,
                    )}
                  />
                </div>
                {errors && <p className={tw(`text-red-500 pt-2 text-sm`)}>Телефонный номер введен не верно</p>}
              </div>
              <div>
                <ButtonSubmitZamer>{buttonText}</ButtonSubmitZamer>
              </div>
              {showSuccessMessage && (
                <p id="zamerSendOk" className={tw(`text-green-500 font-semibold text-sm my-2`)}>
                  Спасибо! Мы уже получили вашу заявку и скоро вам позвоним.
                </p>
              )}
              {showFailureMessage && <p className={tw(`text-red-500`)}>Ой! Что то пошло не так, попробуйте еще раз.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


