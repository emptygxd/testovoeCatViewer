import { useEffect, useState } from 'react';

import { Header } from './components/header';
import { CatCard } from './components/catCard/CatCard';
import { Controls } from './components/controls/Controls';

import { catApi, catType } from './api/catApi';

import './App.css';

function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState<catType | null>(null);

  const toggleIsEnabled = () => setIsEnabled(prev => !prev);
  const toggleIsAutoRefresh = () => setIsAutoRefresh(prev => !prev);

  const loadCat = async () => {
    if (!isEnabled) return;

    setCatUrl(null);
    toggleIsEnabled();
    const res = await catApi();
    setCatUrl(res);
    toggleIsEnabled();
  };

  useEffect(() => {
    loadCat();
  }, []);

  useEffect(() => {
    if (isAutoRefresh && isEnabled) {
      const intervalId = setInterval(loadCat, 5000);
      return () => clearInterval(intervalId);
    }
  }, [isAutoRefresh, isEnabled]);

  return (
    <>
      <Header />

      <Controls
        isEnabled={isEnabled}
        toggleIsEnabled={toggleIsEnabled}
        isAutoRefresh={isAutoRefresh}
        toggleIsAutoRefresh={toggleIsAutoRefresh}
        loadCat={loadCat}
      />

      <CatCard url={catUrl ? catUrl.url : null} />
    </>
  );
}

export default App;
