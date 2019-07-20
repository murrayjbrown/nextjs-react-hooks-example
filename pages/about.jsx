// @flow
import React, { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		/* eslint-disable-next-line no-undef */
		document.title = 'About';
	});

	return (
		<div>
			<article className='content'>
				<h1>Welcome to About!</h1>
				<p>This article should explain something about this site...</p>
			</article>
		</div>
	);
}

// <style jsx>{styles}</style>
