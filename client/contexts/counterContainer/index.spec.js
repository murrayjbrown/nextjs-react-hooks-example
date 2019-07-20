// @flow
import rewire from 'rewire';
import test from 'ava';

import { useContext } from 'react';
import { CounterContext, counterActions, useCounter } from './index';

// Rewire unit under test
const UNIT = rewire('./index');
const getUnitProp = UNIT.__get__;

test('counterContext initialState', t => {
	const initialState = getUnitProp('initialState');
	t.is(initialState.count, 0);
});

test('counterContext counterActions', t => {
	t.deepEqual(counterActions.decrement(), { type: 'decrement' });
	t.deepEqual(counterActions.increment(), { type: 'increment' });
	t.deepEqual(counterActions.reset(), { type: 'reset' });
	t.deepEqual(counterActions.set(100), { type: 'set', count: 100 });
});

test('counterContext reducer: valid counter decrement action', t => {
	const initialState = getUnitProp('initialState');
	const reducer = getUnitProp('reducer');
	t.deepEqual(
		reducer(initialState, counterActions.decrement()),
		{ count: -1 });
});

test('counterContext reducer: valid counter increment action', t => {
	const initialState = getUnitProp('initialState');
	const reducer = getUnitProp('reducer');
	t.deepEqual(
		reducer(initialState, counterActions.increment()),
		{ count: 1 });
});

test('counterContext reducer: valid counter reset action', t => {
	const initialState = getUnitProp('initialState');
	const reducer = getUnitProp('reducer');
	t.deepEqual(
		reducer(initialState, counterActions.reset()),
		{ count: 0 });
});

test('counterContext reducer: valid counter set action', t => {
	const initialState = getUnitProp('initialState');
	const reducer = getUnitProp('reducer');
	t.deepEqual(
		reducer(initialState, counterActions.set(10)),
		{ count: 10 });
});

test('counterContext reducer: unexpected counter action type', t => {
	const initialState = getUnitProp('initialState');
	const reducer = getUnitProp('reducer');
	const error = t.throws(() => {
		reducer(initialState, { type: 'unexpected', count: '0'});
	}, Error);

	t.is(error.message, 'Unexpected counter action.');
});

test('counterContext reducer: invalid counter reset action', t => {
	const reducer = getUnitProp('reducer');
	t.deepEqual(
		reducer({ count: 99 }, { type: 'reset', payload: '0'}),
		{ count: 0 });
});

test('counterContext CounterContext', t => {
	t.true(typeof CounterContext === 'object');
	t.true(typeof CounterContext.Consumer === 'object');
	t.true(typeof CounterContext.Provider === 'object');
});

test('counterContext useSharedCounter', t => {
	t.true(typeof useCounter === typeof useContext);
});
