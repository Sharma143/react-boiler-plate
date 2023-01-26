import Layout from 'components/layout/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Overview = () => {
    const { t, i18n } = useTranslation();

    return (
        <Layout>
            <div style={{ position: "sticky", top: "0" }}>
                <h1 style={{ background: '#fff', zIndex: '1' }}>Overview</h1>
            </div>
            <div style={{ display: 'grid', gridAutoFlow: "row", gridTemplateColumns: 'auto auto auto auto', gap: '30px' }}>
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Overview
