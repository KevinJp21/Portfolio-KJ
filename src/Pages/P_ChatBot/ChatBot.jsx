import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Article from '../../Components/Articles/Articles'
import Chatbot from '../../assets/Images/docme-chatbot.webp'
import { useTranslation } from 'react-i18next'
import './ChatBot.css'
const ChatBot = () => {
    const { t } = useTranslation();
    const content = [
        <p>{t('P_Chatbot.intro')}</p>,
        <h2>{t('P_Chatbot.subtitle1')}</h2>,
        <p>{t('P_Chatbot.p1')}</p>,
        <h2>{t('P_Chatbot.subtitle2')}</h2>,
        <p>{t('P_Chatbot.p2')}</p>,
        <h3>{t('P_Chatbot.subtitle3')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li1') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li2') }}></li>
        </ul>,
        <h3>{t('P_Chatbot.subtitle4')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li3') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li4') }}></li>
        </ul>,
        <h3>{t('P_Chatbot.subtitle5')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li5') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li6') }}></li>
        </ul>,
        <h3>{t('P_Chatbot.subtitle6')}</h3>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li7') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li8') }}></li>
        </ul>,
        <h2>{t('P_Chatbot.subtitle7')}</h2>,
        <p>{t('P_Chatbot.p3')}</p>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li9') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li10') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li11') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li12') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li13') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li14') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li15') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li16') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li17') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li18') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_Chatbot.li19') }}></li>
        </ul>,
        <h2>{t('P_Chatbot.subtitle8')}</h2>,
        <p>{t('P_Chatbot.p4')}</p>,
        <h2>{t('P_Chatbot.subtitle9')}</h2>,
        <p>{t('P_Chatbot.p5')}</p>,

    ]
    return (
        <Layout>
            <main className="PageProject P_Chatbot">
                <Article
                    title={t('P_Chatbot.title')}
                    github='https://github.com/KevinJp21/ChatBot'
                    demo=''
                    imgSrc={Chatbot}
                    imgAlt="Imagen del proyecto asistente docme chatbot"
                    content={content}
                />
            </main>
        </Layout>
    )
}

export default ChatBot