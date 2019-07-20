// @flow
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { expect } from 'chai';
import '@testing-library/jest-dom/extend-expect';

import Counter from '@client/components/Counter';
import CounterContainer from '@client/components/CounterContainer';

//
// No shared counter in composite component
//
const composite = render(
	<CounterContainer label='Test Counters'>
		<Counter label='Counter A' />
		<Counter label='Counter B' />
	</CounterContainer>,
);

test('<No Shared> Counter A: increment button name', () => {
	const { getByTestId } = composite;
	const button = getByTestId('Counter_A-increment');
	expect(button.textContent).to.equal('+1');
});

test('<No Shared> Counter A: decrement button name', () => {
	const { getByTestId } = composite;
	const button = getByTestId('Counter_A-decrement');
	expect(button.textContent).to.equal('-1');
});

test('<No Shared> Counter A: reset button name', () => {
	const { getByTestId } = composite;
	const button = getByTestId('Counter_A-reset');
	expect(button.textContent).to.equal('reset');
});

test('<No Shared> Counter A: initial value', () => {
	const { getByLabelText } = composite;
	const count = getByLabelText('Counter A');
	expect(count.textContent).to.equal('0');
});

test('<No Shared> Counter B: initial value', () => {
	const { getByLabelText } = composite;
	const count = getByLabelText('Counter B');
	expect(count.textContent).to.equal('0');
});

test('<No Shared> Counter A: increment', () => {
	const { getByLabelText, getByTestId } = composite;
	fireEvent.click(getByTestId('Counter_A-increment'));
	const countA = getByLabelText('Counter A');
	const countB = getByLabelText('Counter B');
	expect(countA.textContent).to.equal('1');
	expect(countB.textContent).to.equal('0');
});

test('<No Shared> Counter B: decrement', () => {
	const { getByLabelText, getByTestId } = composite;
	fireEvent.click(getByTestId('Counter_B-decrement'));
	const countA = getByLabelText('Counter A');
	const countB = getByLabelText('Counter B');
	expect(countA.textContent).to.equal('1');
	expect(countB.textContent).to.equal('-1');
});
