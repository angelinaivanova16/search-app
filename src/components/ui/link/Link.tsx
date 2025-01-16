import s from './link.module.scss';
import type { LinkProps } from './link.types';

export const Link = ({
  name,
  href,
}: LinkProps) => {

  return (
    <a
      href={href}
      className={s.baseLink}
      target='_blank'
    >
      {name}
    </a>
  );
};
