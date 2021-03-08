import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

function Layout(props) {
    return (
        <div className="layout">
            <Header />
            <div className="container mt-5 text-center content">
                {props.children}
            </div>

            <Footer />
        </div>
    );
}

export default Layout;