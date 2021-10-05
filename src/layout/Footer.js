import React from 'react';

class Footer extends React.Component {
    render = () => {
        let year = new Date().getFullYear();
        return <footer>
            &copy; Copyright 2020 - {year} PassGen.io
        </footer>
    }
}

export default Footer;