import s from './cardsList.module.css';
import { useGetItemBySearchQuery } from '../../api/searchApi';
import { useSearchParams } from 'react-router-dom';
import { Card, Preloader } from '@/components';
import { useState } from 'react';

export const CardsList = () => {
  const [searchParams] = useSearchParams();
  const [trackIdes, setTrackIdes] = useState<number[]>([]);
  const searchName = searchParams.get('name');

  const {
    data,
    isLoading,
  } = useGetItemBySearchQuery(searchName || '');
  const items = data!;

  const handleTrackIdes = (trackId: number) => {
    if(trackIdes.includes(trackId)){
      setTrackIdes(trackIdes.filter((currentTrackId) => currentTrackId !== trackId))
    } else {
      setTrackIdes([...trackIdes, trackId])
    }
  }

  if (isLoading) {
    return <Preloader />;
  }

  if (items.length < 1) {
    return <p className={s.withoutResults}>Nothing was found</p>
  } else {
    return (
      <div className={s.wrapper}>
        <h2 className={s.searchPageTitle}>Okay... so here's what we found:</h2>
        <div className={s.searchPageWrapper}>
          {items.map((item) => (
            <Card
              key={item.trackId}
              artistName={item.artistName}
              trackName={item.trackName}
              primaryGenreName={item.primaryGenreName}
              trackPrice={item.trackPrice}
              trackViewUrl={item.trackViewUrl}
              trackId={item.trackId}
              activeCard={trackIdes.includes(item.trackId) ? false : true}
              onClick={handleTrackIdes}
            />
          ))}
        </div>
      </div>
    )
  }
}