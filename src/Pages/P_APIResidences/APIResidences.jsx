import React from 'react'
import '../Articles.css'
import Layout from '../../Components/Layout/Layout'
import Article from '../../Components/Articles/Articles'
import APIRes from '../../assets/Images/ApiResidencias.webp'
import { useTranslation } from 'react-i18next'

const APIResidences = () => {
    const { t } = useTranslation();
    const content = [
        <p>{t('P_APIResi.intro')}</p>,
        <h2>{t('P_APIResi.subtitle1')}</h2>,
        <p dangerouslySetInnerHTML={{ __html: t('P_APIResi.p1') }}></p>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li1') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li2') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li3') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li4') }}></li>
        </ul>,
        <h3>{t('P_APIResi.subtitle2')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li5') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li6') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_APIResi.li7') }}></li>
        </ul>,
        <h3>{t('P_APIResi.subtitle3')}</h3>,
        <p>{t('P_APIResi.p2')}</p>,
        <p>{t('P_APIResi.p3')}</p>,
    ]

  return (
    <Layout>
          <main className="PageProject P_APIResidences">
                <Article
                    title={t('P_APIResi.title')}
                    github='https://github.com/KevinJp21/ChatBot'
                    demo=''
                    imgSrc={APIRes}
                    imgAlt="Imagen del proyecto API residencias"
                    content={content}
                />
            </main>
    </Layout>
  )
}

export default APIResidences