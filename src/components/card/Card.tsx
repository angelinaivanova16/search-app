import s from './card.module.css';
import { Link } from '@/components';
import type { CardProps } from './card.types';

export const Card = ({
  artistName,
  trackName,
  primaryGenreName,
  trackPrice,
  trackViewUrl
}: CardProps) => {

  return (
    <div className={s.card}>
      <h1 className={s.cardTitle}>{artistName}</h1>
      <p className={s.cardTitle}>{trackName}</p>
      <p className={s.cardTitle}>{primaryGenreName}</p>
      <p className={s.cardTitle}>{trackPrice} $</p>
      <Link name='Preview' href={trackViewUrl} />
    </div>
  )
}