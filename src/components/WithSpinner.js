import React, { useState, useEffect } from "react";
import { Spinner } from "components";
import { withRouter } from "react-router";

export default WrappedComponent => {
  const WithSpinner = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }, [])

    return isLoading ? <Spinner /> : <WrappedComponent {...props} />
  }

  return withRouter(WithSpinner);
};




