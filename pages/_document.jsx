// @flow
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
	// flowlint-next-line unclear-type: off
	static async getInitialProps(...args: [any]) {
		const documentProps = await super.getInitialProps(...args);

		return { ...documentProps };
	}

	render() {
		return (
			<html style={{ margin: 0, padding: 0 }}>
				<Head>
					<link href='/public/styles/base.css' rel="stylesheet" type="text/css" />
				</Head>
				<body style={{ margin: 0, padding: 0 }}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
