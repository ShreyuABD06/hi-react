import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constuctor")

  }

  componentDidMount(){
    console.log("Parent CDM")

  }

  render() {
    console.log("Parent render")

    return (
      <div>
        <h1>About</h1>
        <User/>
        <UserClass name={"ShreyasClass"}/>
        {/* <UserClass name={"ElonClass"}/> */}
      </div>
    )
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User/>
//       <UserClass name={"ShreyasClass"}/>
//     </div>
//   )
// }

export default About