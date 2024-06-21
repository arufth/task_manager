export const getClassName = (
  currentFilter: string,
  compareFilter: string,
  setClass: string): string => currentFilter === compareFilter ? setClass : ''
