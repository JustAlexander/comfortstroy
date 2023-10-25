import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import HeaderNew from '@/components/header-new';
import VideoJkSection from '@/components/video-jk-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
import Free from '@/components/free';
import PriceWithMaterials from '@/components/price-with-materials';
import Smeta from '@/components/smeta';
import Dogovor from '@/components/dogovor';
import Sroki from '@/components/sroki';
import Equipment from '@/components/equipment';
import Sklad from '@/components/sklad-section';
import KuhniSection from '@/components/kuhni-section';
import { useRouter } from 'next/router';
import FormStoimost from '@/components/form-stoimost';
const CasesSection = dynamic(() => import('@/components/cases-section'));
const SurveyComponent = dynamic(() => import('@/components/survey'), {
  ssr: false,
});

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  const router = useRouter();
  let { jk } = router.query;
  switch (jk) {
    case 'dostoyanie': {
      jk = 'ЖК Достояние';
      break;
    }
    case 'parkpobedy': {
      jk = 'ЖК Парк победы';
      break;
    }
    case 'krasnayaploshad': {
      jk = 'NEO-квартал Красная площадь';
      break;
    }
    case 'samolet': {
      jk = 'ЖК Самолёт';
      break;
    }
    case 'leto': {
      jk = 'ЖК Лето';
      break;
    }
    case 'dogmapark': {
      jk = 'ЖК DOGMA PARK';
      break;
    }
    case 'sarmat': {
      jk = 'ЖК Сармат';
      break;
    }
    case 'zelenayaterritoria': {
      jk = 'ЖК Зеленая территория';
      break;
    }
    case 'ugane': {
      jk = 'ЖК Южане';
      break;
    }
    case 'dvigenie': {
      jk = 'ЖК Движение';
      break;
    }
    case 'obraztsovo': {
      jk = 'ЖК Образцово';
      break;
    }
    case 'mozaika': {
      jk = 'ЖК Мозаика';
      break;
    }
    default: {
      jk = 'Краснодар';
      break;
    }
  }
  return (
    <Page>
      <NextSeo title={'Ремонт квартир в ' + jk + ' под ключ, строительство домов — Комфорт Строй Про'} description="Сделать ремонт квартиры под ключ в новостройке Краснодара по договору, с оплатой в 3 этапа." additionalMetaTags={[{ name: 'yandex-verification', content: '3cac6bd75276b8d1' }]} />
      <HeaderNew jk={jk} />
      <FormStoimost jk={jk} />
      {/* <SurveyComponent /> */}
      <main>
        <VideoJkSection img={router.query.jk} jk={jk} />
        <ListSection />
{/*         <Free /> */}
        <div ref={observe}>
          <FeatureSection jk={jk} />
        </div>
        <Equipment />
        <Sklad />
        {inView && <CasesSection />}
        <KuhniSection />
        <SocialProof />
        <PricingTable jk={jk} />
        <PriceWithMaterials jk={jk} />
        <Smeta />
        <Dogovor jk={jk} />
        <Sroki />
      </main>
      <Footer />
    </Page>
  );
}
