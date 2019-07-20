// @flow
import React, { useEffect } from 'react';
import { defaultToStrict } from 'rambdax';
import { withRouter } from 'next/router';

import './style.scss';

type Props = {
	router: {
		query: {
			id: string,
		},
	},
};

export default withRouter(function Posts(props: Props) {
	const postId = defaultToStrict('1')(props.router.query.id);

	useEffect(() => {
		// eslint-disable-next-line no-undef
		document.title = 'Blog post #'.concat(postId);
	});

	return (
		<article className='content'>
			<h1>My blog post #{postId}</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</article>
	);
});
