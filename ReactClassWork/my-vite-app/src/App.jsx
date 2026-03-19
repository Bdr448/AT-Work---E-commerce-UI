import { useState } from 'react';
import Counter from './components/Counter';
import EventDemo from './components/EventDemo';
import Mapdemo from './components/Mapdemo';
import StateDemo from './components/StateDemo';
import StateDemo2 from './components/StateDemo2';
import Sum from './components/Sum';
import SumUnified from './components/SumUnified';
import SumValidation from './components/SumValidation';
import Todo from './components/Todo';
import SignUp from './components/SignUp';

const pages = {
  Counter,
  EventDemo,
  MapDemo: Mapdemo,
  StateDemo,
  StateDemo2,
  Sum,
  SumUnified,
  SumValidation,
  Todo,
  SignUp
};

export default function App() {
  const [active, setActive] = useState('Counter');
  const Component = pages[active];

  return (
    <>
      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '12px', background: '#1e1e2e' }}>
        {Object.keys(pages).map((name) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            style={{
              padding: '6px 14px',
              cursor: 'pointer',
              background: active === name ? '#646cff' : '#2e2e3e',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: active === name ? 'bold' : 'normal',
            }}
          >
            {name}
          </button>
        ))}
      </nav>
      <div style={{ padding: '20px' }}>
        <Component />
      </div>
    </>
  );
}
