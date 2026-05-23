import { Component, type ErrorInfo, type ReactNode } from 'react';

export interface IPropsErrorBoundary {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  errorBoundary: null | string;
}

export default class ErrorBoundary extends Component<
  IPropsErrorBoundary,
  IErrorBoundaryState
> {
  constructor(props: IPropsErrorBoundary) {
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
