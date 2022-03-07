import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import HeaderNvr from '@/components/header-nvr';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSectionNvr from '@/components/feature-section-nvr';
import SocialProof from '@/components/social-proof';
import PricingTableNvr from '@/components/pricing-table-nvr';
import Footer from '@/components/footer';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';
const CasesSection = dynamic(() => import('@/components/cases-section'));

export default function Nvr() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Новороссийске под ключ в ЖК Аврора, Классика, Облака, Черноморский — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Геленджика по договору, с оплатой в 3 этапа." />
      <HeaderNvr />
      <main>
        <VideoSection />
        <ListSection />
        <div ref={observe}>
          <FeatureSectionNvr />
        </div>
        {inView && <CasesSection />}
        <SocialProof />
        <PricingTableNvr />
      </main>
      <Footer />
    </Page>
  );
}
