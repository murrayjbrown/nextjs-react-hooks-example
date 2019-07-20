// @flow
import React, { useState } from 'react';
import type { StateT } from '@client/contexts/counterContainer';
import { counterActions, useCounter } from '@client/contexts/counterContainer';
import { dashCat } from '@client/util';
import { defaultToStrict } from 'rambdax';

import './style.scss';

type Props = {
	label?: string,
};

export default function Counter({ label }: Props) {
	//
	// shared counter state
	//
	// eslint-disable-next-line no-unused-vars
	const [sharedState, sharedDispatch]: [StateT, Function] = useCounter();
	//
	// local counter state
	//
	const [count, setCount]: [number, Function] = useState(0);

	const id = (...ids: Array<string>) =>
		dashCat(defaultToStrict('', label), ...ids);

	return (
		<div className='counter'>
			<div className='count' aria-labelledby={id('count')} data-testid={id('count')}>
				{count}
			</div>
			<label className='count' id={id('count')}>{label}</label>
			<div className='controls'>
				<button
					className='incrementButton'
					aria-labelledby={id('increment')}
					data-testid={id('increment')}
					onClick={() => {
						setCount(count + 1);
						sharedDispatch(counterActions.increment());
					}}
				>
					<label id={id('increment')}>+1</label>
				</button>
				<button
					className='decrementButton'
					aria-labelledby={id('decrement')}
					data-testid={id('decrement')}
					onClick={() => {
						setCount(count - 1);
						sharedDispatch(counterActions.decrement());
					}}
				>
					<label id={id('decrement')}>-1</label>
				</button>
				<button
					className='resetButton'
					aria-labelledby={id('reset')}
					data-testid={id('reset')}
					onClick={() => {
						setCount(0);
						sharedDispatch(counterActions.reset());
					}}
				>
					<label id={id('reset')}>reset</label>
				</button>
			</div>
		</div>
	);
}
