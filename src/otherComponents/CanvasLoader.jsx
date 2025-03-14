import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as="div"
            center // Corrected the prop name
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <span className='canvas-loader' />
            <p style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }}>
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;
