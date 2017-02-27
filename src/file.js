const React = require('react');
const Spinner = require('react-spinkit');
const he = require('he');


require('./styles.sass');

class File extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      error: {
        message: null,
        type: null,
      },
    }
  }

  componentDidMount() {

  }

  renderBody() {
    const { file } = this.props;

    return (
      <div key="-1">
        <div className="file-line is-small" tabIndex="1">
          <a href={file}>
            <div className="file-path">
            <span className="">
              {he.decode(file)}</span>
              </div>
          </a>
        </div>
      </div>
    )
  }

  render() {
    const { error } = this.state;
    if (error.message) {
      return error.message;
    }

    const elements = [this.renderBody()];

    return (
      <div>
        {elements}
      </div>
    )
  }
}

File.propTypes = {
  file: React.PropTypes.string.isRequired
}

module.exports = File;
