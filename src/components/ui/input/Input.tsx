import s from './input.module.scss';

import {
  FormEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Input = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSearchValue(name);
  }, [name, searchParams]);

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && name !== searchValue.trim()) {
      navigate(`/search?name=${searchValue}`);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={s.wrapper}>
      <form className={s.inputContainer} onSubmit={handleSubmitSearch}>
        <label className={s.labelSearch} htmlFor={name}>
          <img src="/search-app/icons/search.svg" alt="search-image" />
        </label>
        <input
          ref={inputRef}
          type="text"
          className={s.inputSearch}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search...'
        />
      </form>
    </div>
  );
}