import { Input } from '../ui/input/Input';
import s from './header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>iTunes Search</h1>
      <Input />
    </header>
  );
};
