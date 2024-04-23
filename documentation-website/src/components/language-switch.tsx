import React, {
  lazy, Suspense,
  useState,
} from 'react';
import languages from '../locales/languages';
import Window from './window.ts';
import './language-switch.scss';
import t from './t.ts';

const that: Window = window as unknown as Window;

const LanguageSwitch = () => {
  const [
    language,
    setLanguage,
  ] = useState<string>(() => that?.localStorage?.getItem('language',) ?? 'en',);

  const changeLanguage = (newLanguage: string,) => {
    setLanguage(newLanguage,);
    that?.localStorage?.setItem('language', newLanguage,);
    // reload page
    that?.location?.reload();
  };

  const EL = lazy(async() => {
    const ariaLabel = await t('language-switch.aria',);
    return {
      default: () => <select
        className='language-switch'
        aria-label={ ariaLabel }
        value={ language }
        onChange={ (event,) => changeLanguage(event.target.value,) }
      >{ languages.map((lang,) => <option
          key={ lang }
          value={ lang }
        >{ lang }</option>,) }</select>,
    };
  },);

  return <Suspense fallback={
    <select className='language-switch'>{ languages.map((lang,) => <option
      key={ lang }
      value={ lang }
    >{ lang }</option>,) }</select>}>
    <EL/>
  </Suspense>;
};

export default LanguageSwitch;
