import React from 'react';

const withLoading = (WrappedComponent) => {
    return class WithLoading extends React.Component {
        state = {
            isLoading: true,
        }
        componentDidMount () {
            setTimeout(() => { 
                this.setState(prevState => ({
                    isLoading: !prevState.isLoading,
                }));
            }, 800);
        }

        render() {
            return (
                <WrappedComponent isLoading={this.state.isLoading}/>
            )
        }
    }
}

export default withLoading;