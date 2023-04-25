import { Component } from "react";
import ErrorComponent from "../error-marvel/error-component";

class ErrorWrapper extends Component {

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({error: true});
    }

    render() {

        if (this.state.error) {
            return <ErrorComponent/>;
        }
        return this.props.children;
    }
}

export default ErrorWrapper;