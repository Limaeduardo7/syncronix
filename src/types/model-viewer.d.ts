declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: string | boolean;
      'auto-rotate-delay'?: string | number;
      'rotation-per-second'?: string;
      exposure?: string | number;
      'environment-image'?: string;
      'shadow-intensity'?: string | number;
      'disable-zoom'?: string | boolean;
      'camera-controls'?: string | boolean;
      'interaction-prompt'?: string;
      poster?: string;
      loading?: string;
    };
  }
}