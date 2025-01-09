import { Suspense } from 'react';
import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Preloader, CardsList, Header, MainContent } from '@/components';

function App() {

  return (
    <div className={s.mainContainer}>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/*" element={<MainContent />} />
            <Route path="/main" element={<MainContent />} />
            <Route path="/search" element={<CardsList />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App