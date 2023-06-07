declare module 'react' {
  interface DOMAttributes<T> {
    part?: string | undefined;
  }
}

export * from './components';
export * from './use-media-player';
export * from './use-media-provider';
export * from './use-media-remote';
export * from './use-media-store';
export * from './use-slider-store';
