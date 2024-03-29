import React from "react"
import Test from "./Test";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo:{name:"dummy",
            company:"default",
            login : "dummy",
            avatar_url : "https://dummy.photo.com"
            }
        }
         console.log(this.props.name + "  Child constuctor")
    }

    async componentDidMount(){
         console.log(this.props.name + " Child CDM")
        const data = await fetch("https://api.github.com/users/shreyuabd06");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log(this.props.name + " Child CDU")
    }

    componentWillUnmount(){

    }

    render() {
         console.log(this.props.name + " Child Render")

        const {name,company, login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Company: {company}</h3>
                <h3>Contact: @{login}</h3>
                {/* <Test/> */}
            </div>
        )
    }
}

export default UserClass