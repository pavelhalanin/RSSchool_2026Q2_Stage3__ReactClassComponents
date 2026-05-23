import { Component, type ErrorInfo } from 'react';
import type { IErrorBoundaryState } from './IErrorBoundaryState';
import type { IErrorBoundaryProps } from './IErrorBoundaryProps';

export default class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      errorBoundary: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { errorBoundary: error.toString() };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Fallback UI (ErrorBoundary):', error, errorInfo);
    this.setState((prevState) => ({
      ...prevState,
      errorBoundary: `${error}`,
    }));
  }

  render() {
    if (this.state.errorBoundary) {
      return (
        <div className="container">
          <section className="section">
            <div className="alert alert-danger">
              <h2>Fallback UI (ErrorBoundary)</h2>
              {this.state.errorBoundary}
            </div>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}
