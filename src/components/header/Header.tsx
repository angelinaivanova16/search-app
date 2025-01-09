import s from './header.module.css';
import { Input } from '@/components';

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>iTunes Search</h1>
      <Input />
    </header>
  );
};
