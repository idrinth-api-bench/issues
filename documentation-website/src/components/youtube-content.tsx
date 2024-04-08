import React, {
  lazy,
  Suspense,
  useState,
} from 'react';
import YoutubeLink from './youtube-link.tsx';
import t from './t.ts';
import {
  STRING_PX_OFFSET,
  STRING_START,
  YOUTUBE_DEFAULT_HEIGHT,
  YOUTUBE_DEFAULT_WIDTH,
} from '../constants.ts';
import {
  get,
} from './local-consent-storage.ts';

interface YoutubeContentType {
  children: string;
}
const allow = [
  'accelerometer',
  'clipboard-write',
  'encrypted-media',
  'gyroscope',
  'picture-in-picture',
  'web-share',
];

const YoutubeContent = ({
  children,
}: YoutubeContentType,) => {
  const [
    allowed,
    setAllowed,
  ] = useState<boolean>(get('youtube',),);
  if (! allowed) {
    document.body.addEventListener('consentChanged', (event,) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (event?.detail?.key === 'youtube') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setAllowed(event?.detail?.value ?? false,);
      }
    },);
    return <YoutubeLink>{children}</YoutubeLink>;
  }
  const EL = lazy(async() => {
    const title = await t('youtube.player',);
    const id = 'youtube_' + children;
    const setHeightOnLoad = () => {
      const element = document.getElementById(id,);
      if (! element) {
        return;
      }
      const computed = getComputedStyle(element,);
      const widthString = computed.getPropertyValue('width',);
      const width= Number.parseFloat(
        widthString.substring(
          STRING_START,
          widthString.length - STRING_PX_OFFSET,
        ),
      );
      const factor = YOUTUBE_DEFAULT_HEIGHT / YOUTUBE_DEFAULT_WIDTH;
      element.setAttribute(
        'height',
        `${ Math.ceil(width * factor,) }`,
      );
    };
    return {
      default: () => <>
        <iframe
          id={id}
          src={`https://www.youtube-nocookie.com/embed/${ children }`}
          title={title}
          allow={allow.join(';',)}
          onLoad={setHeightOnLoad}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <YoutubeLink>{children}</YoutubeLink>
      </>,
    };
  },);
  return <Suspense fallback={<YoutubeLink>{children}</YoutubeLink>}>
    <EL/>
  </Suspense>;
};

export default YoutubeContent;
