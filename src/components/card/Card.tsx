import s from './card.module.css';
import clsx from 'clsx';
import { Link } from '@/components';
import type { CardProps } from './card.types';
import { useState } from 'react';

export const Card = ({
  artistName,
  trackId,
  trackName,
  primaryGenreName,
  trackPrice,
  trackViewUrl,
  activeCard,
  onClick,
}: CardProps) => {

  return (
    <div
      className={activeCard ? s.card : s.activeCard}
      onClick={() => onClick(trackId)}
    >
      <h1 className={s.cardTitle}>{artistName}</h1>
      <p className={s.cardTitle}>{trackName}</p>
      <p className={s.cardTitle}>{primaryGenreName}</p>
      <p className={s.cardTitle}>{trackPrice} $</p>
      <Link name='Preview' href={trackViewUrl} />
    </div>
  )
}