declare module 'wowjs/dist/wow.js' {
    export class WOW {
      constructor(options?: any);
      init(): void;
      stop(): void;
    }
  }