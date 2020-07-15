import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';

ReactDOM.render(
    // <CounterApp />,
    <FormWithCustomHook />,
  document.getElementById('root')
);

