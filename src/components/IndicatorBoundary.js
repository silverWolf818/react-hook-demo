import {Boundary} from 'react-suspense-boundary';

const Loading = () => {
    return (
        <div>loading</div>
    );
};

const Error = ({error}) => {
    const {message, stack} = error;
    return (
        <>
            <div>Oops! {message}</div>
            <div>Oops! {stack}</div>
        </>
    );
};

const IndicatorBoundary = props => {
    const {children} = props;

    return (
        <Boundary
            pendingFallback={<Loading/>}
            renderError={(error) => <Error error={error}/>}
        >
            {children}
        </Boundary>
    );
};

export default IndicatorBoundary;