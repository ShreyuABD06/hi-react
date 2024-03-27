import React from "react";
class Test extends React.Component {
    constructor(props) {
        super(props);

        console.log("Child Child constuctor")

    }

    componentDidMount() {
        console.log("Child Child CDM")

    }

    render() {
        console.log("Child Child Render")

        return (<div>
            Hey
        </div>)
    }
}

export default Test;