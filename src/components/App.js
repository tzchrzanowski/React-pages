// this component handles the app template used on every page. like darth vader
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <Header
                loading={this.props.loading}
                />
                {this.props.children}
            </div>
        );
    }
}
App.propTypes= {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default App;