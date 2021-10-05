import React from 'react';

class Footer extends React.Component {
    render = () => {
        let year = new Date().getFullYear();
        return <footer>
            &copy; Copyright 2020 - {year} PassGen.io | Coded with 💜 by <a href="https://hacked.is/" rel="nofollow">Hacked LLC</a>
        </footer>
    }
}

export default Footer;