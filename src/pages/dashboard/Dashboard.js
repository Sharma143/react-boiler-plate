import Layout from 'components/layout/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t, i18n } = useTranslation();

    return (
        <Layout>
            <div>
                Dashboard
                <h1>{t('boilerPlate')}</h1>
            </div>
        </Layout>
    )
}

export default Dashboard
