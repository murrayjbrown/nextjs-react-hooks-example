// @flow
import React, { useEffect } from 'react';
import PostsApp from '@client/components/PostsApp';

export default function PostsPage() {
	useEffect(() => {
		/* eslint-disable-next-line no-undef */
		document.title = 'Posts';
	});

	return (
		<div>
			<PostsApp className='app flex flex-column' />
		</div>
	);
}
