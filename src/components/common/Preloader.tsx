import s from './preloader.module.css';

export const Preloader = () => {
  return (
    <img className={s.preloader} src="/collection-of-recipes-react/images/preloader.gif" alt="Loading..." />
  )
}