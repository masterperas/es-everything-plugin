const React = require('react');
const Spinner = require('react-spinkit');



require('./styles.sass');

class ErrorDiv extends React.Component {

    render() {
        const { error } = this.props;
        if(error.message){
            return (
                <div className = 'error'>
                    <b> ERROR</b> {error.message}
                </div>
            );
        }else{
            return null;
        }
    }
}

ErrorDiv.propTypes = {

}

module.exports = ErrorDiv;
