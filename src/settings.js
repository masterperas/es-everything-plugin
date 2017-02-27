const React = require('react');
const Spinner = require('react-spinkit');
const ErrorDiv = require('./error')

//var path = require('fs');
var utils = require('./utils');
require('./styles.sass');

class Settings extends React.Component {
    constructor(props) {

        super(props);
        const { get } = this.props.config;

        this.changeConfig = this.changeConfig.bind(this);
        this.state = {
            esevpluginpath : get(utils.CONSTANTS.PATH_KEY),
            error: {
                message: null,
                type: null,
            },
        }
        const error = this.checkIfFileExists(this.state.esevpluginpath);
        this.state.error = error;
    }
    changeConfig(value) {

        const error = this.checkIfFileExists(value)

       this.props.config.set(utils.CONSTANTS.PATH_KEY, value)
       this.setState({
           esevpluginpath: value,
           error : error
       });

     }

      checkIfFileExists(value){

         const error ={message:null};

         if(!utils.checkIfEsExists(value)){
             console.log('file does not exist');
             error.message='Could not find es.exe at that path';
         }
         return error;
     }

    componentDidMount() {

    }

    render() {
        const path = this.state.esevpluginpath;
        return (
            <div className = 'preview'>
                < ErrorDiv error={this.state.error} />
                <div className='item'>
                     <label className='label'>Everything Path:</label>
                    <input
                      className='itemValue'
                      type="text"
                      value={path}
                     onChange={( event ) => this.changeConfig(event.target.value)}
                    />
                </div>

            </div>
        );
    }
}

Settings.propTypes = {

}

module.exports = Settings;
