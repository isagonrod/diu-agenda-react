import React, {Component, createContext} from "react";
import firebaseApp, {auth, generateUserDocument} from "../config/firebase";

export const UserContext = createContext({user: undefined});

class UserProvider extends Component {
    state = {
        user: undefined
    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({user});
        });
    };

    render() {
        const {user} = this.state;

        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
