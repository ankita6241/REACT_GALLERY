 // import { render } from '@testing-library/react';
// import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Footer from './Footer'
import Header from './Header';
import './Home.css';
class Profile extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: this.props.location.state.userName,
    //     };
    //   }
    render() {

        return (
            <>
                <Header  {...this.props}/>
                <div className="bg-no-overlay">
                    <div className="text-center">
                        <h2>Details <br></br> {localStorage.getItem("appLoggedinUser") }<br></br></h2>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}
export default Profile;