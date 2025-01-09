import { Component, ReactNode } from 'react';
import { Error } from '@/components';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Error />;
		}
		return this.props.children;
	}
}