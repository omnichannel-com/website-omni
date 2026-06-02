declare module 'typewriter-effect/dist/core' {
  interface TypewriterOptions {
    strings?: string[];
    cursor?: string;
    delay?: number;
    deleteSpeed?: number;
    loop?: boolean;
    autoStart?: boolean;
    pauseFor?: number;
    wrapperClassName?: string;
    cursorClassName?: string;
  }

  class Typewriter {
    constructor(container: HTMLElement | string, options?: TypewriterOptions);
    typeString(string: string): Typewriter;
    pauseFor(duration: number): Typewriter;
    deleteAll(speed?: number): Typewriter;
    deleteChars(num: number): Typewriter;
    callFunction(callback: () => void): Typewriter;
    start(): void;
  }

  export default Typewriter;
}
