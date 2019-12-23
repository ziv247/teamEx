import React from 'react';
import { Link } from 'react-router-dom';

class Phase1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            birthday: undefined,
            allStates: false
        }
    }

    onChange = (name, value) => {
        this.setState({
            [name]: value
        });
        localStorage.setItem(name, value);
        this.checkAllInput()
    }

    checkAllInput = () => {
        const inputName = localStorage.getItem('name');
        const inputEmail = localStorage.getItem('email');
        console.log(inputEmail);
        const inputDate = localStorage.getItem('birthday');
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailCheck = re.test(String(inputEmail).toLowerCase());
        const dateCheck = !inputDate;
        if (inputName.length >= 3 && emailCheck && inputEmail.length > 0 && !dateCheck) {
            this.setState({
                allStates: true
            })
        }
    }

    render() {
        console.log(this.state.allStates);
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' name='name' onChange={(e) => this.onChange(e.target.name, e.target.value)}/>
                    <input type='text' name='email' onChange={(e) => this.onChange(e.target.name, e.target.value)}></input>
                    <input type="date" name="birthday" onChange={(e) => this.onChange(e.target.name, e.target.value)} required></input>
                </form>
                 {this.state.allStates ? <Link to={'/phase2'}>Next</Link> : <p>Next</p>}
            </div>
        )
    }
}

export default Phase1