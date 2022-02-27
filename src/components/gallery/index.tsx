import { tw } from 'twind';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const articles = [
  {
    key: `1`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5381982678229822629_gcoqza.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5381982678229822629_gcoqza.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `2`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435056_qbbytk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435056_qbbytk.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `3`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435051_v0ippb.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435051_v0ippb.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `4`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5381982678229822628_pfvbjs.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5381982678229822628_pfvbjs.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `5`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435054_nrr9ey.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435054_nrr9ey.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `6`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435055_xicvkp.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435055_xicvkp.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `7`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5384564516215435057_difnyk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435057_difnyk.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `622`,
    height: `1280`,
  },
  {
    key: `8`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413249_oyhjvx.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413249_oyhjvx.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `9`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413250_ht4lae.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413250_ht4lae.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `10`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435052_yhoqa8.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435052_yhoqa8.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `11`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_scale,w_400/f_auto/v1640778471/comfortstroy/photo5384564516215435053_ea7yzw.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5384564516215435053_ea7yzw.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `622`,
  },
  {
    key: `12`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413251_xza40l.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413251_xza40l.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `13`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413230_nh9qio.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413230_nh9qio.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `14`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413244_pah4ci.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413244_pah4ci.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `15`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413242_nt56sm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413242_nt56sm.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `853`,
    height: `1280`,
  },
  {
    key: `16`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413247_sodw6t.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413247_sodw6t.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `17`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413248_koccxu.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413248_koccxu.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `18`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413243_hgdgjm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413243_hgdgjm.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `19`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413246_d7sbpc.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413246_d7sbpc.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `20`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413238_tb5udj.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413238_tb5udj.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `21`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413241_thdqbs.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413241_thdqbs.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `853`,
    height: `1280`,
  },
  {
    key: `22`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413239_mztzdj.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413239_mztzdj.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `23`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413237_ng69mo.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413237_ng69mo.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `24`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413236_mblx9g.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413236_mblx9g.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `25`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413231_njospi.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413231_njospi.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `26`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413235_jo0w7s.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413235_jo0w7s.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `27`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413227_xruwpt.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413227_xruwpt.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `28`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413226_x7hva7.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413226_x7hva7.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `29`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413234_mkvq9s.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413234_mkvq9s.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `853`,
  },
  {
    key: `30`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413229_f79vi8.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413229_f79vi8.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `31`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413228_wjrjsd.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413228_wjrjsd.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `32`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413225_fje3el.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413225_fje3el.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `33`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413223_pqrtij.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413223_pqrtij.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `34`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413224_rgqrzw.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413224_rgqrzw.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `35`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413222_qjw4dk.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413222_qjw4dk.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `36`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413218_ptycng.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413218_ptycng.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `37`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413221_qrjt1z.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413221_qrjt1z.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `38`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413217_cexay2.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413217_cexay2.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `39`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413220_jjdlhx.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413220_jjdlhx.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `40`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413219_sk36se.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413219_sk36se.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `41`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5382011201107635554_avmgvm.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5382011201107635554_avmgvm.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `662`,
  },
  {
    key: `42`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413212_ldubww.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413212_ldubww.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `43`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413214_hbvfdn.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413214_hbvfdn.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `44`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413216_mxfr63.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413216_mxfr63.jpg`,
    alt: `Отделка квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `45`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413215_cjzm2t.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413215_cjzm2t.jpg`,
    alt: `Ремонт под ключ в Геленджике`,
    width: `1280`,
    height: `720`,
  },
  {
    key: `46`,
    image: `https://res.cloudinary.com/ddpeoofxn/image/upload/c_fill,w_400,h_194/f_auto/v1640778471/comfortstroy/photo5359440851614413213_i6xkew.jpg`,
    imagebig: `https://res.cloudinary.com/ddpeoofxn/image/upload/f_auto/v1640778471/comfortstroy/photo5359440851614413213_i6xkew.jpg`,
    alt: `Ремонт квартиры в Геленджике`,
    width: `1280`,
    height: `720`,
  },
];

const GalleryProjets = () => (
  <section className={tw(`lg:py-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Наши проекты</p>
        <h1 className={tw(`mt-2 pb-4 text-4xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Фото ремонта квартир
        </h1>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full flex flex-wrap justify-around`)}>
          <Gallery>
            {articles.map((article) => (
              <div
                key={article.key}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-5 lg:mb-10
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <Item
                  original={article.imagebig}
                  thumbnail={article.image}
                  width={article.width}
                  height={article.height}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as React.RefObject<HTMLImageElement>}
                      alt={article.alt}
                      onClick={open}
                      src={article.image}
                      className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    />
                  )}
                </Item>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryProjets;
