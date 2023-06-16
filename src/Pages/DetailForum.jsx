import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IsiDetailForum from '../components/IsiDetailForum';

const Forum = () => {
    return (
        <div style={{ backgroundColor: '#DCDCDC' }}>
            <Navbar />
            <IsiDetailForum />
            <Footer />
        </div>
        
    );    
};

export default Forum;