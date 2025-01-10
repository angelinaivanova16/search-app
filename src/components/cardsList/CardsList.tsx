import s from './cardsList.module.css';
import { useGetItemBySearchQuery } from '../../api/searchApi';
import { useSearchParams } from 'react-router-dom';
import { Card, Preloader } from '@/components';

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
          {recipes.map((item, index) => (
            <Card
              key={index}
              artistName={item['artistName']}
              trackName={item['trackName']}
              primaryGenreName={item['primaryGenreName']}
              trackPrice={item['trackPrice']}
              trackViewUrl={item['trackViewUrl']}
            />
          ))}
        </div>
      </div>
    )
  }
}