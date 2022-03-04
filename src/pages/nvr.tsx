import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import HeaderNvr from '@/components/header-nvr';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSectionNvr from '@/components/feature-section-nvr';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTableNvr from '@/components/pricing-table-nvr';
import Footer from '@/components/footer';

export default function Nvr() {
  return (
    <Page>
      <NextSeo title="Ремонт квартир в Новороссийске под ключ в ЖК Аврора, Классика, Облака, Черноморский — Комфорт Строй Про" description="Сделать ремонт квартиры под ключ в новостройке Геленджика по договору, с оплатой в 3 этапа." />
      <HeaderNvr />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSectionNvr />
        <CasesSection />
        <SocialProof />
        <PricingTableNvr />
      </main>
      <Footer />
    </Page>
  );
}
