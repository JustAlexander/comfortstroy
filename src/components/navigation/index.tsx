import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import NextLink from 'next/link';
import Image from 'next/image';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Геленджик`,
    href: `/`,
  },
  {
    label: `Краснодар`,
    href: `https://krd.comfortstroy.pro/`,
  },
];

const secondaryLinks = [
  {
    label: `Калькулятор`,
    href: `/calculator`,
  },
  {
    label: `Позвонить`,
    href: `tel:+79897602629`,
  },
  {
    label: `Оставить заявку`,
    href: `/zamer`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button type="button" aria-controls="mobile-menu" aria-expanded={showMenu} onClick={toggleMenu} className={tw(`p-2 text-gray-400`)}>
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg className={tw(`h-6 w-6`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className={tw(`h-6 w-6`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" width={24} height={24}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <NextLink href={link.href} key={link.label} passHref>
          <a className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)}>{link.label}</a>
        </NextLink>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <NextLink href={link.href} passHref key={`mobile-${link.label}`}>
            <a className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}>{link.label}</a>
          </NextLink>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white fixed top-0 left-0 right-0 z-50 shadow-sm`)}>
      <div className={tw(`max-w-7xl mx-auto px-6 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-16`)}>  {/* Изменено с h-24 на h-16 */}
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <NextLink href="/" passHref>
                <a>
                  <Image className={tw(`h-12 w-52`)} src="/logo.svg" alt="logo" width={208} height={48} />
                </a>
              </NextLink>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-6 flex items-baseline space-x-4`)}>  {/* Уменьшен отступ ml-10 -> ml-6 */}
                {links.map((link: Link) => (
                  <NextLink href={link.href} passHref key={link.label}>
                    <a className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}>{link.label}</a>
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <NextLink href="/calculator" passHref>
                <a>
                  <Button modifier="border-0 mr-2">Калькулятор</Button>
                </a>
              </NextLink>
              <a href="tel:+79897602629">
                <Button modifier="border-0 mr-2">Позвонить</Button>
              </a>
              <NextLink href="/zamer" passHref>
                <a>
                  <Button primary>Оставить заявку</Button>
                </a>
              </NextLink>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};
export default Navigation;
