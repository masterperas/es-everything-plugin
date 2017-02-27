const React = require('react');
const Spinner = require('react-spinkit');
const {
    exec
} = require('child_process');
const File = require('./file');


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
            error: { message: null, type: null }
          });

  }

  componentDidMount() {
    var term2 = (this.props.term);
    var cmd = "d:/bin/everything/es.exe -n 10 -s *" + term2 + "* ";
          exec(cmd,this.handleResults);
  }

  handleClick(link) {

  }
  renderAnswers() {
      return this.state.files.map((file, idx) => (
        <File file={file} key={idx} />
      ));
    }

  render() {
    const { search, error, files } = this.state;

    if (error.message) {
      return error.message
      ;
    }

    if (! files.length) {
      return <Spinner spinnerName='wave' noFadeIn />
    }
    const elements = [...this.renderAnswers()];
    return (
      <div className='preview'>
          {elements}
      </div>
    );
  }
}

Preview.propTypes = {
  term: React.PropTypes.string.isRequired,
}

module.exports = Preview;
