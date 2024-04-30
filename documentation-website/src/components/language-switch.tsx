import React, {
  lazy, Suspense, useState,
} from 'react';
import languageKey from '../locales/language-key.ts';
import languages from '../locales/languages';
import Lang from './lang.tsx';
import './language-switch.scss';
import t from './t.ts';

const LanguageSwitch = ({
  window,
}: { window: Window },) => {
  const [
    language,
    setLanguage,
  ] = useState<string>(
    () => window.localStorage.getItem('language',) ?? 'en',
  );

  const changeLanguage = (newLanguage: string,) => {
    setLanguage(newLanguage,);
    window.localStorage.setItem('language', newLanguage,);
    // reload page
    window.location.reload();
  };

  const EL = lazy(async() => {
    const ariaLabel = await t('language-switch.aria',);
    return {
      default: () => <select
        className='language-switch'
        name='language-switch'
        aria-label={ariaLabel}
        value={language}
        onChange={(event,) => changeLanguage(event.target.value,)}>
        {languages.map((lang,) => <option
          key={lang}
          value={lang}>
          <Lang lnkey={`languages.${ lang }` as languageKey} />
        </option>,
        )}
      </select>
      ,
    };
  },);

  return (
    <Suspense
      fallback={
        <select
          className='language-switch'
          name='language-switch'>
          {languages.map((lang,) => <option
            key={lang}
            value={lang}>
            {lang}
          </option>,
          )}
        </select>
      }>
      <EL />
    </Suspense>
  );
};

export default LanguageSwitch;
