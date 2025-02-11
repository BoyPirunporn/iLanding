import React from 'react';
import FeatureLeft from './components/FeatureLeft';
import FeaturePhonePicture from './components/FeaturePhonePicture';
import FeatureRight from './components/FeatureRight';
const FeatureTwo = () => {
    return (
        <section id='feature-2' className='container p-[60px_0] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
            <FeatureLeft />
            <FeaturePhonePicture />
            <FeatureRight />
        </section>
    );
}

export default FeatureTwo;
