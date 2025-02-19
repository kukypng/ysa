import React from 'react';
import { StoreTemplate } from './StoreTemplate';
import { cantinhoDaYsaConfig } from './stores/cantinho-da-ysa';
import { teste01Config } from './stores/teste01';
import { parceiro1Config } from './stores/parceiro1';
import { parceiro2Config } from './stores/parceiro2';
import { parceiro3Config } from './stores/parceiro3';
import { parceiro4Config } from './stores/parceiro4';
import { parceiro5Config } from './stores/parceiro5';
import { parceiro6Config } from './stores/parceiro6';
import { parceiro7Config } from './stores/parceiro7';
import { parceiro8Config } from './stores/parceiro8';
import { parceiro9Config } from './stores/parceiro9';
import { parceiro10Config } from './stores/parceiro10';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();
  const store = searchParams.get('store') || 'cantinho-da-ysa';

  const getStoreConfig = () => {
    switch (store) {
      case 'oliveira-imports':
        return oliveiraImportsConfig;
      case 'parceiro1':
        return parceiro1Config;
      case 'parceiro2':
        return parceiro2Config;
      case 'parceiro3':
        return parceiro3Config;
      case 'parceiro4':
        return parceiro4Config;
      case 'parceiro5':
        return parceiro5Config;
      case 'parceiro6':
        return parceiro6Config;
      case 'parceiro7':
        return parceiro7Config;
      case 'parceiro8':
        return parceiro8Config;
      case 'parceiro9':
        return parceiro9Config;
      case 'parceiro10':
        return parceiro10Config;
      default:
        return cantinhoDaYsaConfig;
    }
  };

  return <StoreTemplate config={getStoreConfig()} />;
}

export default App;
