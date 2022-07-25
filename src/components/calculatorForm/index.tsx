import { tw } from 'twind';
import ButtonSubmitZamer from '@/components/buttonSubmitZamer';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { Grid, Typography, Divider, Chip, Alert, Tooltip } from '@mui/material';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import { E164Number } from 'libphonenumber-js/types';

const monajSanteh = 36000;
const ustanovkaSanteh = 10428;
const konturTeplPol = 11483;
const ustanovkaElectroPrib = 10000;
const sistemaVentil = 6500;
const gidroMaterial = 7500;
const deliveryMater = 30000;

const pereplan = 246;
const stajkaPola = 700;
const electroMontaj = 1800;
const potolkiNatajn = 800;
const potolkiKombin = 1700;
const malarka = 1146;
const rabota = 5500;
const prorab = 609;
let itogo = 0;
let ploshad = 50;

const CalculatorForm = () => {
  const [name, setName] = useState(``);
  const [phone, setPhone] = useState<E164Number | undefined>();
  const [errors, setErrors] = useState(false);
  const [buttonText, setButtonText] = useState(`Отправить заявку`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [rangeval, setRangeval] = useState(`50`);
  const [state, setState] = useState({
    isPereplan: false,
    isStajka: false,
    isTeplPol: false,
    isNatajPotolot: false,
    isElectroMontaj: true,
    isUstanovkaElectroPrib: true,
  });
  const [tipPotolka, setTipPotolka] = useState(`natajnoy`);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeTipPotolka = (event) => {
    setTipPotolka(event.target.value);
  };
  const raschet = () => {
    let price = 0;
    price = monajSanteh + ustanovkaSanteh + sistemaVentil + gidroMaterial + deliveryMater + Number(rangeval) * malarka + Number(rangeval) * rabota + Number(rangeval) * prorab;
    if (state.isPereplan) price += Number(rangeval) * pereplan;
    if (state.isStajka) price += Number(rangeval) * stajkaPola;
    if (state.isTeplPol) price += konturTeplPol * 3;
    if (tipPotolka === `natajnoy`) price += Number(rangeval) * potolkiNatajn;
    else price += Number(rangeval) * potolkiKombin;
    if (state.isElectroMontaj) price += Number(rangeval) * electroMontaj;
    if (state.isUstanovkaElectroPrib) price += ustanovkaElectroPrib;
    itogo = price;

    return price;
  };
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
      const res = await fetch(`/api/form-calculator`, {
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
        setButtonText(`Отправить заявку`);
        // Reset form fields
        setPhone(``);
        setName(``);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText(`Отправить заявку`);
      // Reset form fields
      setPhone(``);
      setName(``);
    }
  };
  return (
    <section className={tw(`lg:py-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-4 sm:mb-16 text-center`)}>
          <p className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Онлайн-калькулятор</p>
          <h1 className={tw(`mt-2 pb-4 text-4xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Расчитайте стоимость ремонта</h1>
        </div>
        <div className={tw(`min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`max-w-md w-full space-y-8`)}>
            <form className={tw(`space-y-6`)} onSubmit={handleSubmit}>
              <div className={tw(`-space-y-px`)}>
                <div className="relative pt-1">
                  <label htmlFor="customRange1" className="form-label">
                    Площадь: <b>{rangeval} кв.м.</b>
                  </label>
                  <Slider
                    defaultValue={50}
                    aria-label="Площадь квартиры"
                    valueLabelDisplay="auto"
                    min={20}
                    max={150}
                    onChange={(event) => {
                      const target = event.target as HTMLTextAreaElement;
                      setRangeval(target?.value);
                      ploshad = Number(target?.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  sx={{
                    width: `100%`,
                  }}
                >
                  <FormGroup>
                    <Divider sx={{ paddingBottom: 1 }}>
                      <Chip label="Выберите нужные работы" />
                    </Divider>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel control={<Switch checked={state.isPereplan} onChange={handleChange} name="isPereplan" />} label="Перепланировка" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(Number(rangeval) * pereplan)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel control={<Switch checked={state.isStajka} onChange={handleChange} name="isStajka" />} label="Стажка полов" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(Number(rangeval) * stajkaPola)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel control={<Switch checked={state.isTeplPol} onChange={handleChange} name="isTeplPol" />} label="Теплый пол (3 контура)" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(konturTeplPol * 3)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel control={<Switch checked={state.isElectroMontaj} onChange={handleChange} name="isElectroMontaj" />} label="Электромонтаж" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(Number(rangeval) * electroMontaj)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel control={<Switch checked={state.isUstanovkaElectroPrib} onChange={handleChange} name="isUstanovkaElectroPrib" />} label="Установка электроприборов" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(ustanovkaElectroPrib)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </FormControl>
                <FormControl
                  component="fieldset"
                  sx={{
                    width: `100%`,
                  }}
                >
                  <FormLabel component="legend">Тип потолка</FormLabel>
                  <RadioGroup aria-label="Тип потолки" name="controlled-radio-buttons-group" value={tipPotolka} onChange={handleChangeTipPotolka}>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel value="natajnoy" control={<Radio />} label="Натяжной" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(Number(rangeval) * potolkiNatajn)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <FormControlLabel value="kombinir" control={<Radio />} label="Комбинированный" />
                      </Grid>
                      <Grid item xs={4} textAlign="right">
                        <Typography sx={{ lineHeight: 2.4 }}>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(Number(rangeval) * potolkiKombin)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
                <Divider sx={{ paddingBottom: 1 }}>
                  <Chip label="Другие работы" />
                </Divider>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Разводка и монтаж сантех. узлов</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(monajSanteh)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Установка сантехники</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(ustanovkaSanteh)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Система вентиляции</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(sistemaVentil)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Гидроизоляционный материал</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(gidroMaterial)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Малярный и расходный материал</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Tooltip title="В эту сумму включены все черновые, малярные и расходные материалы, кроме тех, которые заказчик выбирает на свой вкус (обои и др.)" placement="top-end" enterTouchDelay={50} arrow>
                      <Typography>
                        {new Intl.NumberFormat(`ru-RU`, {
                          style: `currency`,
                          currency: `RUB`,
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        }).format(Number(rangeval) * malarka)}
                      </Typography>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Доставка и подъем материалов</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Tooltip title="Разгрузка, подъем отделочных материалов, вынос и вывоз строительного мусора, и уборка после ремонта под сдачу квартиры" placement="top-end" enterTouchDelay={50} arrow>
                      <Typography>
                        {new Intl.NumberFormat(`ru-RU`, {
                          style: `currency`,
                          currency: `RUB`,
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        }).format(deliveryMater)}
                      </Typography>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Divider sx={{ marginBottom: 1 }} />
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Работа</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(Number(rangeval) * rabota)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>Работа прораба</Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography>
                      {new Intl.NumberFormat(`ru-RU`, {
                        style: `currency`,
                        currency: `RUB`,
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(Number(rangeval) * prorab)}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ paddingBottom: 1 }}>
                  <Chip label="Итого" />
                </Divider>
                <Grid container alignItems="center" sx={{ paddingBottom: 1 }}>
                  <Grid item xs={8}>
                    <Typography>
                      Итоговая средняя сумма ремонта под ключ <b>со&nbsp;всеми материалами:</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Tooltip title="В эту сумму входят все отмеченные работы под ключ, включая расходные и отделочные материалы" placement="top-end" enterTouchDelay={50} arrow>
                      <Typography variant="h6" color="primary">
                        <b>
                          {new Intl.NumberFormat(`ru-RU`, {
                            style: `currency`,
                            currency: `RUB`,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(raschet())}
                        </b>
                      </Typography>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Alert severity="info">
                  Точная цена может варьироваться от&nbsp;
                  {`${new Intl.NumberFormat(`ru-RU`, {
                    style: `currency`,
                    currency: `RUB`,
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(itogo - 40000)}\u00a0до\u00a0${new Intl.NumberFormat(`ru-RU`, {
                    style: `currency`,
                    currency: `RUB`,
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(itogo + 40000)}`}
                </Alert>
              </div>
              <div>
                <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
                  Оставьте заявку и мы сделаем точный расчет цены на ремонт вашей квартиры:
                </Typography>
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
                      focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm my-6`,
                      )}
                    />
                  </div>
                  {errors && <p className={tw(`text-red-500 pt-2 text-sm`)}>Телефонный номер введен не верно</p>}
                </div>
                <div>
                  <ButtonSubmitZamer>{buttonText}</ButtonSubmitZamer>
                </div>
                {showSuccessMessage && (
                  <p id="formSendOk" className={tw(`text-green-500 font-semibold text-sm my-2`)}>
                    Спасибо! Мы уже получили вашу заявку и скоро вам позвоним.
                  </p>
                )}
                {showFailureMessage && <p className={tw(`text-red-500`)}>Ой! Что то пошло не так, попробуйте еще раз.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorForm;
