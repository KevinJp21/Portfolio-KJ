import React from 'react'
import '../Articles.css'
import Layout from '../../Components/Layout/Layout'
import Article from '../../Components/Articles/Articles'
import APIOrders from '../../assets/Images/ApiOrdenes.webp'
import { useTranslation } from 'react-i18next'

const APIOrdes = () => {
    const { t } = useTranslation();

    const content = [
        <p>{t('P_APIOrders.intro')}</p>,
        <h2>{t('P_APIOrders.subtitle1')}</h2>,
        <p dangerouslySetInnerHTML={{ __html: t('P_APIOrders.p1') }}></p>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li1') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li2') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li3') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li4') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li5') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li6') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li7') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li8') }}></li>
        </ul>,
        <h3>{t('P_APIOrders.subtitle2')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li9') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li10') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIOrders.li11') }}></li>
        </ul>,
        <h3>{t('P_APIOrders.subtitle3')}</h3>,
        <p>{t('P_APIOrders.p2')}</p>,
    ]

    return (
        <Layout>
            <main className="PageProject P_APIOrders">
                <Article
                    title={t('P_APIOrders.title')}
                    github='https://github.com/KevinJp21/API_Gestion_Orden'
                    demo=''
                    imgSrc={APIOrders}
                    imgAlt="Imagen del proyecto API Ordenes"
                    content={content}
                />
            </main>
        </Layout>
    )
}

export default APIOrdes