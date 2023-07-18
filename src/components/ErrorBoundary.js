import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    console.error("Error caught by error boundary:", error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          React.cloneElement(child, { onError: handleOnError })
        ) : (
          child
        )
      )}
    </React.Fragment>
  );
};

export default ErrorBoundary;
