import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            text: "",
            arr: []
        }

        this.handleClick = this.handleClick.bind(this)
        this.showText = this.showText.bind(this)

    }

    handleClick(e) {
        this.setState({ message: e.target.value })
    }
    showText() {
        this.setState({ text: this.state.message })
        this.setState({ message: "" })
    }


    render() {
        return (
            <div>
                <form  >
                    <div>
                        <label >Live form</label>
                    </div>

                    <input type="text" value={this.state.message} onChange={this.handleClick} />
                </form>

                <h1>{this.state.message}</h1>
                <button onClick={this.showText}>Click Me!</button>
                <p>{this.state.text}</p>


            </div>
        )
    }
}

export default Form;
