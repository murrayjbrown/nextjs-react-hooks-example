// @flow
import React, { useEffect } from 'react';

import dynamic from 'next/dynamic';
const IncludeMarkdown = dynamic(import('../client/components/IncludeMarkdown'), { ssr: false });

export default function Home() {
	useEffect(() => {
		/* eslint-disable-next-line no-undef */
		document.title = 'Home';
	});

	return (
		<div>
			<IncludeMarkdown src='../public/index.md' />
		</div>
	);
}

