import s from './card.module.css';
import { Link } from '@/components';

type Props = {
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  trackPrice: number;
  trackViewUrl: string;
};

export const Card = ({ artistName, trackName, primaryGenreName, trackPrice, trackViewUrl }: Props) => {

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