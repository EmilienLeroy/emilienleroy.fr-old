declare class Scroll {
  constructor(params?: any);
  on(event: string, func: (caller: [string]) => void): void;
}
    
declare module 'locomotive-scroll' {  
  export = Scroll;
}