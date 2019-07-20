// @flow
import test from 'ava';

import { dashCat } from './index';

test('dashCat("a", "b")', t => {
	const result = dashCat('a','b');
	t.is(result, 'a-b');
});

test('dashCat("", "a")', t => {
	const result = dashCat('', 'a');
	t.is(result, 'a');
});

test('dashCat("a", "", "b")', t => {
	const result = dashCat('a', '', 'b');
	t.is(result, 'a-b');
});

test('dashCat("a", " ", "b")', t => {
	const result = dashCat('a', ' ', 'b');
	t.is(result, 'a-b');
});

test('dashCat("a", "b c", "d")', t => {
	const result = dashCat('a', 'b c', 'd');
	t.is(result, 'a-b_c-d');
});

