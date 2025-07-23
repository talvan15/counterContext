import React from "react";
import { createContext,useContext, useState, ReactNode} from "react";

interface CounterContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  canIncrement: boolean;
  canDecrement: boolean;
};

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

export function CounterProvider({children}: {children: ReactNode}) {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(prevCount => prevCount < 100 ? prevCount + 1 : prevCount);
    }

    function decrement() {
        setCount(prevCount => prevCount > 0 ? prevCount -1 : prevCount);
    }

    function reset(){
        setCount(0);
    }

    const canIncrement = count < 100
    const canDecrement = count > 0 

    return (
        <CounterContext.Provider value={{
            count,
            increment,
            decrement,
            reset,
            canIncrement,
            canDecrement
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export function useCounter() {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter deve ser usado dentro de CounterProvider");
    }
    return context;
}
