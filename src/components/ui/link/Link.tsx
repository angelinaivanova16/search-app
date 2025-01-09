import s from './link.module.css';
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
