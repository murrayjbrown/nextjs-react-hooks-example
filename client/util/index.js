// @flow
export function dashCat(...ids: Array<string>): string {
	return [...ids]
		.map(e => e.trim().replace(/ /gi, '_'))
		.filter(e => e.length > 0)
		.join('-');
}
