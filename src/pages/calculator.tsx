import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import CalculatorForm from '@/components/calculatorForm';
import Footer from '@/components/footer';

export default function Calculator() {
  return (
    <Page>
      <NextSeo title="Калькулятор расчета стоимости ремонта квартиры в Геленджике — Комфорт Строй Про" description="Расчитайте стоимость ремонта квартиры в Геленджике" />
      <main>
        <CalculatorForm />
      </main>
      <Footer />
    </Page>
  );
}
