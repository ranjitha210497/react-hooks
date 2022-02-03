import './App.css';
import React, {useReducer}from 'react'
import ClassCounter from './components/UseState/ClassCounter';
import ClassCounterOne from './components/Effect/ClassCounterOne';
import ClassMouse from './components/Effect/ClassMouse';
import DataFetching from './components/Effect/DataFetching';
import HookCounterOne from './components/Effect/HookCounterOne';
import HookMouse from './components/Effect/HookMouse';
import IntervalClassCounter from './components/Effect/IntervalClassCounter';
import IntervalHookCounter from './components/Effect/IntervalHookCounter';
import MouseContainer from './components/Effect/MouseContainer';
import HookCounter from './components/UseState/HookCounter';
import HookCounter2 from './components/UseState/HookCounter2';
import HookCounter3 from './components/UseState/HookCounter3';
import HookCounter4 from './components/UseState/HookCounter4';
import ComponentC from './components/UseReducer/ComponentC';
import Counter1 from './components/UseReducer/Counter1';
import Counter2 from './components/UseReducer/Counter2';
import Counter3 from './components/UseReducer/Counter3';
import ComponentA from './components/UseReducer/ComponentA';
import ComponentB from './components/UseReducer/ComponentB';
import DataFetching1 from './components/UseReducer/DataFetching1';
import DataFetching2 from './components/UseReducer/DataFetching2';
import ParentComponent from './components/UseCallBack/ParentComponent';
import Counter from './components/UseMemo/Counter';
import FocusInput from './components/UseRef/FocusInput';
import ClassTimer from './components/UseRef/ClassTimer';
import HookTimer from './components/UseRef/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo';
import CounterOne from './components/CustomHooks/CounterOne';
import CounterTwo from './components/CustomHooks/CounterTwo';
import UserForm from './components/CustomHooks/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter />
      <HookCounter2 />
      <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codeevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 />  */}
      {/* <Counter3 /> */}
      {/* <div>Count - {count}</div>
      <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
