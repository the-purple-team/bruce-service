import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './elements.jsx';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
    };
  }

  componentDidMount() {
    if (
      window.location.href.split('/')[
        window.location.href.split('/').length - 1
      ] !== ''
    ) {
      $.ajax({
        type: 'GET',
        url: `${window.location.href}`,
        success: (result) => {
          console.log(result);
          this.setState((state) => ({
            currentProduct: {
              id: result,
            },
          }));
        },
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Welcome to Amazon!</h1>
        <div>{window.location.href}</div>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
