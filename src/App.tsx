import React from 'react';
import './App.scss';
import { Header } from './header/Header';
import { Landing } from './static/landing/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignUp } from './auth/signup/SignUp';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <main className="router">
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/signup" component={SignUp} />
                    {/*<Route path="/contact" component={Contact} />*/}
                </main>
            </BrowserRouter>
            <h1>Footer goes here...</h1>
        </div>
    );
};

export default App;
