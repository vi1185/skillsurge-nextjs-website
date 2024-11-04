'use client';
import React from 'react';

interface Props {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
                    <p className="text-sm">{this.state.error?.message}</p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="mt-4 text-sm underline hover:no-underline"
                    >
                        Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 