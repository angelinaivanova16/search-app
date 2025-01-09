import s from './preloader.module.css';

import type { PreloaderProps } from './preloader.types';

export const Preloader = (props: PreloaderProps) => {
  const { paddingTop = 0 } = props;
  return (
    <div data-testid="preloader" style={{ paddingTop }} className={s.conatiner}>
      <div className={s.preloader} />
    </div>
  );
};