// @flow
import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import NavMenu from '@client/components/NavMenu';

export default class extends App {
	static async getInitialProps({ Component, ctx }: NextAppContext) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<NavMenu />
				<Component {...pageProps} />
			</Container>
		);
	}
}
