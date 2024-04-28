import React, {
  lazy,
  Suspense,
  useState,
} from 'react';
import Lang from './lang.tsx';
import languages from '../locales/languages';
import languageKey from '../locales/language-key.ts';
import t from './t.ts';
import Window from './window.ts';
import './language-switch.scss';

const LanguageSwitch = () => {
  const that: Window = window as unknown as Window;

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
      >{
          languages.map((lang,) => <option
            key={ lang }
            value={ lang }
          >
            <Lang lnkey={`languages.${ lang }` as languageKey}/>
          </option>,)
        }
      </select>,
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
