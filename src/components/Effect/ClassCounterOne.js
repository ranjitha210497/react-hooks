import { isEditableInput } from '@testing-library/user-event/dist/utils';
import React, {Component} from 'react';
import ClassCounter from '../UseState/ClassCounter';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log("Updating document title")
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={e => 
                        this.setState({ name: e.target.value})
                    } 
                />
                <button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
