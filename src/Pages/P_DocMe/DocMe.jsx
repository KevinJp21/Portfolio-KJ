import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './DocMe.css';
import DocMeImg from '../../assets/Images/docme.webp';
import { ReactComponent as ReactJs } from '../../assets/Icons/ReactJs.svg';
import { ReactComponent as MySQL } from '../../assets/Icons/MySQL.svg';
import { useTranslation } from 'react-i18next';
import Article from '../../Components/Articles/Articles';
import ToolBadge from '../../Secciones/SeccionesHome/Projects/ToolBadge';
import Image from '../../Components/Image/Image';

const DocMe = () => {
  const { t } = useTranslation();

  const content = [
    <p key="intro">{t('P_DocMe.intro')}</p>,
    <h2 key="subtitle1">{t('P_DocMe.subtitle1')}</h2>,
    <p key="p1">{t('P_DocMe.p1')}</p>,
    <p key="p2">{t('P_DocMe.p2')}</p>,
    <p key="p3">{t('P_DocMe.p3')}</p>,
    
    <p key="p4">{t('P_DocMe.p4')}</p>,
    <h2 key="subtitle2">{t('P_DocMe.subtitle2')}</h2>,
    <p key="p5">{t('P_DocMe.p5')}</p>,
    <ul key="list">
      <li>{t('P_DocMe.li1')}</li>
      <li>{t('P_DocMe.li2')}</li>
      <li>{t('P_DocMe.li3')}</li>
      <li>{t('P_DocMe.li4')}</li>
      <li><a href="#">{t('P_DocMe.li5')}</a></li>
    </ul>,
    <h2 key="subtitle3">{t('P_DocMe.subtitle3')}</h2>,
    <p key="p6">{t('P_DocMe.p6')}</p>,
    <ul className="ListBadges" key="ReactJS">
      <ToolBadge icon="" name="ReactJS" className="ReactJS" />
    </ul>,
    <p key="p7">{t('P_DocMe.p7')}</p>,
    <ul className="ListBadges" key="expressjs">
      <ToolBadge icon="" name="ExpressJS" className="ExpressJS" />
    </ul>,
    <p key="p8">{t('P_DocMe.p8')}</p>,
    <ul className="ListBadges" key="mysql">
      <ToolBadge icon={<MySQL />} name="MySQL" className="MySQL" />
    </ul>,
    <p key="p9">{t('P_DocMe.p9')}</p>,
    <ul className="ListBadges" key="Api_CB">
    <ToolBadge icon="" name="API Chatbot" className="Api_CB" />
  </ul>,
    <p key="p10">{t('P_DocMe.p10')}</p>,
  ];

  return (
    <Layout>
      <main className="PageProject">
        <Article
          title={t('P_DocMe.title')}
          github='https://github.com/KevinJp21/DocMe_ReactJS'
          demo='https://docme-two.vercel.app'
          imgSrc={DocMeImg}
          imgAlt="Imagen del proyecto DocMe"
          content={content}
        />
      </main>
    </Layout>
  );
};

export default DocMe;