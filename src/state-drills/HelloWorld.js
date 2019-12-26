import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { who: 'world' };
  }
  handleButtonClick = () => {
    this.setState({ who: this.button })
  }
  render () {
    return  (
       <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'world' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
     
  }
}

export default HelloWorld;