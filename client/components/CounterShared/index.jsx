// @flow
import React from 'react';
import type { StateT } from '@client/contexts/counterContainer';
import { useCounter } from '@client/contexts/counterContainer';
import { dashCat } from '@client/util';
import { defaultToStrict } from 'rambdax';

import './style.scss';

type Props = {
	initialValue?: number,
	label?: string,
};

export default function CounterShared({ label }: Props) {
	// eslint-disable-next-line no-unused-vars
	const [sharedState, _]: StateT = useCounter();

	const id = (...ids: Array<string>) =>
		dashCat(defaultToStrict('', label), ...ids);

	return (
		<div>
			<div className='counterShared'>
				<label id={id('sharedCount')}>{label}</label>
				<div
					className='count'
					aria-labelledby={id('sharedCount')}
				>
					{sharedState.count}
				</div>
			</div>
		</div>
	);
}
