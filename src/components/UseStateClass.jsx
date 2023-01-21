import React  from 'react'


 class UseStateClass extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        count: 0,
    
      };
    }

    render()
     {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
   <button 
           onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me1
    </button>
<br />

    <button 
           onClick={() => this.setState({ count: this.state.count - 1 })}>
            Click me2
    </button>
<br />
        </div>
      );
    }
  }
  
export default UseStateClass;

