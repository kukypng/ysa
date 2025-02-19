import React from 'react';
import { StoreTemplate } from './StoreTemplate';
import { cantinhoDaYsaConfig } from './stores/cantinho-da-ysa';
import { oliveiraImportsConfig } from './stores/oliveira-imports';
import { partner1Config } from './stores/partner1';
import { partner2Config } from './stores/partner2';
import { partner3Config } from './stores/partner3';
import { partner4Config } from './stores/partner4';
import { partner5Config } from './stores/partner5';
import { partner6Config } from './stores/partner6';
import { partner7Config } from './stores/partner7';
import { partner8Config } from './stores/partner8';
import { partner9Config } from './stores/partner9';
import { partner10Config } from './stores/partner10';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();
  const store = searchParams.get('store') || 'cantinho-da-ysa';

  const getStoreConfig = () => {
    switch (store) {
      case 'oliveira-imports':
        return oliveiraImportsConfig;
      case 'partner1':
        return partner1Config;
      case 'partner2':
        return partner2Config;
      case 'partner3':
        return partner3Config;
      case 'partner4':
        return partner4Config;
      case 'partner5':
        return partner5Config;
      case 'partner6':
        return partner6Config;
      case 'partner7':
        return partner7Config;
      case 'partner8':
        return partner8Config;
      case 'partner9':
        return partner9Config;
      case 'partner10':
        return partner10Config;
      default:
        return cantinhoDaYsaConfig;
    }
  };

  return <StoreTemplate config={getStoreConfig()} />;
}

export default App;
