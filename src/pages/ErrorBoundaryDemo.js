import React from 'react'
import Child from '../Child'
import ErrorBoundary from '../components/ErrorBoundary'

const ErrorBoundaryDemo = props => {
    return (
        <div>
            ErrorBoundaryDemo
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        </div>
    )
}

export default ErrorBoundaryDemo