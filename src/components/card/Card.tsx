import s from './card.module.css';

type Props = {
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  trackPrice: number;
};

export const Card = ({ artistName, trackName, primaryGenreName, trackPrice }: Props) => {

  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <h1 className={s.cardTitle}>{artistName}</h1>
        <p className={s.cardTitle}>{trackName}</p>
        <p className={s.cardTitle}>{primaryGenreName}</p>
        <p className={s.cardTitle}>{trackPrice}</p>
      </div>
    </div>
  )
}