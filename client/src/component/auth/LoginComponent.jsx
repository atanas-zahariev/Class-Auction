import React from 'react';
import { Redirect } from 'react-router-dom';

import { api } from '../../hooks/dataService';
import { validationHook } from '../../hooks/validationHook';
import { formHandller } from '../../services/utility';
import { AuthContext } from '../../context/AuthContext';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }

    
    render() {
        console.log(this.context);
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />;
        }
        const {login} = api();
        const userLogin = async (data) => {
            try {
                validationHook(data);
                await login(data);
                this.setState({ redirect: true });
            } catch (error) {
                console.log(error);
            }
        };

        const onSubmit = formHandller(userLogin);

        return (
            <section id="login-section" className="narrow" >

                <h1 className="item">Login</h1>

                <div className="item padded align-center">

                    <form className="aligned" onSubmit={onSubmit} >

                        <label>
                            <span>Email</span>
                            <input type="text" name="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" name="password" />
                        </label>

                        <div className="align-center">
                            <input className="action" type="submit" value="Sign In" />
                        </div>

                    </form>

                </div>

            </section>


        );
    }

}

Login.contextType = AuthContext;


