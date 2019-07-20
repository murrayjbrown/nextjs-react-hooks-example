// @flow
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import { defaultToStrict } from 'rambdax';

type Props = {
	src: string
};

export default function IncludeMarkdown({ src }: Props) {
	const [state, setState]: [string, Function] = useState('');

	useEffect(() => {
		async function getData() {
			try {
				const res = await axios.get(src);
				setState(defaultToStrict('')(res.data));
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log('IncludeMarkdown getData error: ', err);
			}
		}

		getData();
	}, [state]);

	return (
		<article className='content'>
			<Markdown className='markdown' source={state} />
		</article>
	);
}
