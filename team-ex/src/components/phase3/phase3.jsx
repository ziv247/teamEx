import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Phase3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    };
  }

  onChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
    localStorage.setItem(inputName, value);
    this.checkIfAllTrue()
  }

  checkIfAllTrue = () => {
    if (this.state.imgUrl) {
      this.setState({
        isDisabled: false
      })
    } else {
      this.setState({
        isDisabled: true
      })
    }
  }


  render() {
    console.log(localStorage.getItem('imgUrl'));
    return (
      <form>
        <label htmlFor="img-url">please enter and image url:</label>
        <input id="img-url" name="imgUrl" type="text" onChange={(e) => this.onChange(e.target.name, e.target.value)}/>

        <label htmlFor="hobbies">please enter hobbies (optional):</label>
        <input id="hobbies" name="hobbies" type="text" onChange={(e) => this.onChange(e.target.name, e.target.value)}/>
        
        <Link to="/next2">Previous</Link>
        {this.state.isDisabled 
        ?
        <span>Next</span> 
        :
        <Link to="/next4">Next</Link>
        }
      </form>
    )
  }
}

export default Phase3;