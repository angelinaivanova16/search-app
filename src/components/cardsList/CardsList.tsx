import s from './cardsList.module.css';
import { Preloader } from '../common/Preloader';
import { useGetItemBySearchQuery } from '../../api/searchApi';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../card/Card';

export const CardsList = () => {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');

  const {
    data,
    isLoading,
  } = useGetItemBySearchQuery(searchName || '');
  const recipes = data!;

  if (isLoading) {
    return <Preloader />;
  }

  if (recipes.length < 1) {
    return <p className={s.withoutResults}>Nothing was found</p>
  } else {
    return (
      <div className={s.wrapper}>
        <h2 className={s.searchPageTitle}>Okay... so here's what we found:</h2>
        <div className={s.searchPageWrapper}>
          {recipes.map((item) => (
            <Card
              key={item['trackId']}
              artistName={item['artistName']}
              trackName={item['trackName']}
              primaryGenreName={item['primaryGenreName']}
              trackPrice={item['trackPrice']}
            />
          ))}
        </div>
      </div>
    )
  }
}