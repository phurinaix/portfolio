import React from 'react';

const withLoading = (WrappedComponent) => {
    return class WithLoading extends React.Component {
        state = {
            isLoading: true,
        }
        componentWillReceiveProps(nextProps) {
            this.props = nextProps;
        }
        componentDidMount () {
            // setTimeout(() => { 
                this.setState(prevState => ({
                    isLoading: !prevState.isLoading,
                }));
            // }, 1000);
        }

        render() {
            return (
                <React.Fragment>
                    {   
                        this.state.isLoading ? 
                        <div className="loading-bar">
                            <p className="loading-text">LOADING ...</p>
                            <div className="progress progress-striped">
                                <div className="progress-bar" >
                                </div>                       
                            </div> 
                        </div>
                        :
                        <WrappedComponent />
                    }
                </React.Fragment>
            )
        }
    }
}

export default withLoading;