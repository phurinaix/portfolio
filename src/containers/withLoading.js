import React from 'react';

const withLoading = (WrappedComponent) => {
    return class WithLoading extends React.Component {
        state = {
            isLoading: false,
        }
        componentWillReceiveProps(nextProps) {
            this.props = nextProps;
        }
        componentDidMount () {
            // let visited = sessionStorage.getItem('visited');
            // if (visited === 'true') {
            //     this.setState({
            //         isLoading: true
            //     });
            //     setTimeout(() => { 
            //         this.setState(prevState => ({
            //             isLoading: !prevState.isLoading,
            //         }));
            //     }, 800);
            // }
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