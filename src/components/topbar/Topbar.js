import React from 'react'
import { useTranslation } from 'react-i18next';
const Topbar = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <div>
                    <button onClick={() => changeLanguage('en')}>english</button>
                </div>
                <div>
                    <button onClick={() => changeLanguage('de')}>german</button>
                </div>
            </div>
        </div>
    )
}

export default Topbar