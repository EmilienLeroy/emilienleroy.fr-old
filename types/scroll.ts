/**
 * @TODO
 * Improve locomotive scroll types.
 */
declare class Scroll {
  constructor(params?: any);
  on(event: string, func: (caller: [string]) => void): void;
}
  
export {
  Scroll
}