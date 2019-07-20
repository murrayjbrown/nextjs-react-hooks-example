// @flow
import React, { useContext, useReducer } from 'react';
import match from 'rust-match';
import produce from 'immer';
import { defaultToStrict } from 'rambdax';

export type StateT = {
	count: number,
};

export type ActionT = {
	type: string,
	count?: number
};

const DEFAULT_INITIAL_COUNT = 0;

const initialState: StateT = { count: DEFAULT_INITIAL_COUNT };

const reducer = (state: StateT, action: ActionT) =>
	produce(state, () => {
		// eslint-disable-next-line no-console
		console.log('reducer: ', state, action);
		const draft: StateT = { ...state };
		match(action.type, {
			decrement: () => (draft.count -= 1),
			increment: () => (draft.count += 1),
			reset: () => (draft.count = initialState.count),
			set: () => (draft.count = defaultToStrict(draft.count)(action.count)),
			_: () => {
				throw new Error('Unexpected counter action.');
			},
		});
		return draft;
	});

export const counterActions = {
	decrement: () => ({ type: 'decrement' }),
	increment: () => ({ type: 'increment' }),
	reset: () => ({ type: 'reset' }),
	set:(count: number) => ({ type: 'set', count }),
};

type Props = {
	children?: any,
	initialValue?: number,
}
export function CounterProvider({ children, initialValue }: Props) {
	if (typeof initialValue === 'number') {
		initialState.count = initialValue;
	}
	const contextValue = useReducer(reducer, initialState);

	return (
		<CounterContext.Provider value={contextValue}>
			{children}
		</CounterContext.Provider>
	);
}

/*
 * Custom hook
 */
export function useCounter() {
	const contextValue = useContext(CounterContext);

	return contextValue;
}

export const CounterContext: any = React.createContext();
export default CounterContext;
