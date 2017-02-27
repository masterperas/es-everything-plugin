const React = require('react');
const Spinner = require('react-spinkit');
const {
    exec
} = require('child_process');
const File = require('./file');
const utils = require('./utils');
const ErrorDiv = require('./error')

class Preview extends React.Component {
    constructor(props) {

        super(props);
        this.handleResults = this.handleResults.bind(this);

        this.state = {
            search: null,
            files: [],
            error: {
                message: null,
                type: null,
            },
        }
    }

    handleResults(error, stdout, stderr) {

        var results = stdout.split('\n');
        this.setState({
            files: results,
            error: {
                message: null,
                type: null
            }
        });

    }

    componentDidMount() {
        const espath = this.props.path;
        console.log('espath'+espath);
        if (utils.checkIfEsExists(espath)) {
            var term2 = (this.props.term);
            var cmd = espath+"/es.exe -n 10 -s *" + term2 + "* ";
            exec(cmd, this.handleResults);
        }
    }

    renderAnswers() {
        return this.state.files.map((file, idx) => (
            <File file = {file} key = {idx} />
        ));
    }

    render() {
        const {
            search,
            error,
            files
        } = this.state;

        if (error.message) {
            return <ErrorDiv error={this.state.error} />;
        }

        const espath = this.props.path;

        if (!utils.checkIfEsExists(espath)) {
            this.setState({
                files: [],
                error: {
                    message: 'Could not find es.exe. Please check your Settings'
                }
            });

        }

        if (!files.length) {
            return(
                    <Spinner spinnerName = 'wave' noFadeIn / >
            )
        }

        const elements = [...this.renderAnswers()];

        return (
          <div>
              <div className='preview'>
                  {elements}
              </div>
          </div>
        );
    }
}

Preview.propTypes = {
    term: React.PropTypes.string.isRequired,
}

module.exports = Preview;
