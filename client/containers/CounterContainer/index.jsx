// @flow
import React from 'react';
import CounterShared from '@client/components/CounterShared';
import { CounterProvider } from '@client/contexts/counterContainer';
import { dashCat } from '@client/util';
import { defaultToStrict } from 'rambdax';

import './style.scss';

type Props = {
	children: Array<Object>,
	sharedCounter?: {
		initialValue?: number,
		label?: string,
	},
	label: string,
};

export function CounterContainer({ children, sharedCounter, label }: Props) {
	const id = (...ids: Array<string>) =>
		dashCat(defaultToStrict('', label), ...ids);

	if (typeof sharedCounter !== 'undefined') {
		return (
			<div
				className='counterContainer'
				aria-labelledby={id('counterContainer')}
			>
				<label id={id('counterContainer')}>{label}</label>
				<CounterProvider initialValue={sharedCounter.initialValue}>
					<CounterShared
						data-testId={id('counterShared')}
						label={!sharedCounter.label ? undefined : sharedCounter.label}
					/>
					<div className='counters'>{children}</div>
				</CounterProvider>
			</div>
		);
	} else {
		return (
			<div
				className='counterContainer'
				aria-labelledby={id('counterContainer')}
			>
				<label id={id('counterContainer')}>{label}</label>
				<CounterProvider>
					<div className='counters'>{children}</div>
				</CounterProvider>
			</div>
		);
	}
}

export default CounterContainer;
