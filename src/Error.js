import React from 'react';

export default class Error extends React.Component {

  state = { 
      hasError: false, 
      error: null 
    };

  static getDerivedStateFromError(error) {
    return { 
        hasError: true, 
        error: error.message 
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.state.error}</div>;
    }
    return this.props.children;
  }
}