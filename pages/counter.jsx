// @flow
import React, { useEffect } from 'react';
import Counter from '@client/components/Counter';
import CounterContainer from '@client/containers/CounterContainer';


export default function Home() {
	useEffect(() => {
		/* eslint-disable-next-line no-undef */
		document.title = 'Counter';
	});

	return (
		<div>
			<CounterContainer
				label='Counters Demo 1'
				sharedCounter={{
					initialValue: 100,
					label: 'Shared Counter',
				}}
			>
				<Counter className='counter' label='Counter A' />
				<Counter className='counter' label='Counter B' />
			</CounterContainer>
			<p>&nbsp;</p>
			<center>
				<p>The component demo above has no shared counter</p>
				<p>but the demo below does.</p>
			</center>
			<p>&nbsp;</p>
			<CounterContainer label='Counters Demo 2'>
				<Counter label='Counter X' />
				<Counter label='Counter Y' />
			</CounterContainer>
		</div>
	);
}
