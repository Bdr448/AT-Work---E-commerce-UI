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
import Navigation from './components/Navigation';
import StringCase from './components/StringCase';
import CharCount from './components/CharCount';
import CountdownTimer from './components/CountdownTimer';
import PasswordToggle from './components/PasswordToggle';
import DigitalClock from './components/DigitalClock';
import GuessNumber from './components/GuessNumber';
import BasicCalc from './components/BasicCalc';
import Calculator from './components/Calculator';
import GSTCalculator from './components/GSTCalculator';
import TodoLocalStorage from './components/TodoLocalStorage';
import SignUpTable from './components/SignUpTable';
import FetchUsers from './components/FetchUsers';
import WeatherApp from './components/WeatherApp';
import MovieSearch from './components/MovieSearch';
import NewsApp from './components/NewsApp';
import CurrencyConverter from './components/CurrencyConverter';
import DarkLightMode from './components/DarkLightMode';

const pages = {
  // Task 1
  Navigation,
  // Task 2
  StringCase,
  // Task 3
  CharCount,
  // Task 4
  Counter,
  // Task 5
  CountdownTimer,
  // Task 6
  PasswordToggle,
  // Task 7
  DigitalClock,
  // Task 8
  GuessNumber,
  // Task 9
  BasicCalc,
  // Task 10
  Calculator,
  // Task 11
  GSTCalculator,
  // Task 12 - Todo with State
  Todo,
  // Task 12 - Todo with LocalStorage
  TodoLocalStorage,
  // Task 12 - Form with validation
  SignUp,
  // Task 13 - Form with LocalStorage + Table Edit/Delete
  SignUpTable,
  // Task 14
  FetchUsers,
  // Task 15
  WeatherApp,
  // Task 16
  MovieSearch,
  // Task 17
  NewsApp,
  // Task 18
  CurrencyConverter,
  // Task 19
  DarkLightMode,
  // Class demos
  EventDemo,
  MapDemo: Mapdemo,
  StateDemo,
  StateDemo2,
  Sum,
  SumUnified,
  SumValidation,
};

export default function App() {
  const [active, setActive] = useState('Navigation');
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
