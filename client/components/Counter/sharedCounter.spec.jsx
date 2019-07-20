// @flow
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { expect } from 'chai';
import '@testing-library/jest-dom/extend-expect';

import Counter from '@client/components/Counter';
import CounterContainer from '@client/components/CounterContainer';

//
// Shared counter in composite component
//

const composite = render(
	<CounterContainer
		label='Test Counters'
		sharedCounter={{
			initialValue: 100,
			label: 'Shared Counter',
		}}
	>
		<Counter label='Counter A' />
		<Counter label='Counter B' />
	</CounterContainer>
);

test('<Shared> Shared Counter: initial value', () => {
	const { getByLabelText } = composite;
	const sharedCount = getByLabelText('Shared Counter');
	expect(sharedCount.textContent).to.equal('100');
});

test('<Shared> Counter A: initial value', () => {
	const { getByLabelText } = composite;
	const count = getByLabelText('Counter A');
	expect(count.textContent).to.equal('0');
});

test('<Shared> Counter B: initial value', () => {
	const { getByLabelText } = composite;
	const count = getByLabelText('Counter B');
	expect(count.textContent).to.equal('0');
});

test('<Shared> Counter A: increment', () => {
	const { getByLabelText, getByTestId } = composite;
	fireEvent.click(getByTestId('Counter_A-increment'));
	const countA = getByLabelText('Counter A');
	const countB = getByLabelText('Counter B');
	const sharedCount = getByLabelText('Shared Counter');
	expect(countA.textContent).to.equal('1');
	expect(countB.textContent).to.equal('0');
	expect(sharedCount.textContent).to.equal('101');
});

test('<Shared> Counter B: decrement', () => {
	const { getByLabelText, getByTestId } = composite;
	fireEvent.click(getByTestId('Counter_B-decrement'));
	const countA = getByLabelText('Counter A');
	const countB = getByLabelText('Counter B');
	const sharedCount = getByLabelText('Shared Counter');
	expect(countA.textContent).to.equal('1');
	expect(countB.textContent).to.equal('-1');
	expect(sharedCount.textContent).to.equal('100');
});

test('<Shared> Counter A: reset', () => {
	const { getByLabelText, getByTestId } = composite;
	fireEvent.click(getByTestId('Counter_A-reset'));
	const countA = getByLabelText('Counter A');
	const countB = getByLabelText('Counter B');
	const sharedCount = getByLabelText('Shared Counter');
	expect(countA.textContent).to.equal('0');
	expect(countB.textContent).to.equal('-1');
	expect(sharedCount.textContent).to.equal('100');
});
