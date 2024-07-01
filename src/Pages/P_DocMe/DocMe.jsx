import React from 'react'
import Layout from '../../Components/Layout/Layout'
import './DocMe.css'
import DocMeImg from '../../assets/Images/docme.webp'
import ToolBadge from '../../Secciones/SeccionesHome/Projects/ToolBadge'
import { ReactComponent as ReactJs } from '../../assets/Icons/ReactJs.svg'
import { ReactComponent as MySQL } from '../../assets/Icons/MySQL.svg'


//Translation

import { useTranslation } from 'react-i18next';
const DocMe = () => {


  const { t } = useTranslation();

  const projects = [
    { id: 1, title: t('Projects.p1'), description: '1', img: DocMe, tool: [{ name: "ReactJS", icon: <ReactJs /> }, { name: "ExpressJS" }, { name: "MySQL", icon: <MySQL /> }], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/' }
  ];

  return (
    <Layout>
      <main className="PageProject">
        <article itemType="http://schema.org/Article">
          <header className="projectHeader">
            <div className="projectHeaderMeta">
              <h1 itemProp="name">{t('P_DocMe.title')}</h1>
            </div>
            <picture>
              <img decoding="async" itemProp="image" src={DocMeImg} alt="Imagen del proyecto DocMe" width="800px" height="450px" />
            </picture>
          </header>

          <div className="projectBody" itemProp='articleBody'>
            <p>
            {t('P_DocMe.intro')}
            </p>
            <h2>{t('P_DocMe.subtitle1')}</h2>
            <p>
            {t('P_DocMe.p1')}
            </p>
            <p>
            {t('P_DocMe.p2')}
            </p>
            <p>
            {t('P_DocMe.p3')}
            </p>
            <p>
            {t('P_DocMe.p4')}
            </p>

            <h2>{t('P_DocMe.subtitle2')}</h2>
            <p>
            {t('P_DocMe.p5')}
            </p>
            <ul>
              <li>{t('P_DocMe.li1')}</li>
              <li>{t('P_DocMe.li2')}</li>
              <li>{t('P_DocMe.li3')}</li>
              <li>{t('P_DocMe.li4')}</li>
              <li><a href="#">{t('P_DocMe.li5')}</a></li>
            </ul>
            <h2>{t('P_DocMe.subtitle3')}</h2>
            <p>{t('P_DocMe.p6')}</p>
            <ul className="ListBadges">
              <ToolBadge icon={<ReactJs />} name="ReactJS" className="ReactJS" />
            </ul>
            <p>
            {t('P_DocMe.p7')}
            </p>

            <ul className="ListBadges">
              <ToolBadge icon="" name="ExpressJS" className="ExpressJS" />
            </ul>
            <p>{t('P_DocMe.p8')}</p>

            <ul className="ListBadges">
              <ToolBadge icon={<MySQL />} name="MySQL" className="MySQL" />
            </ul>

            <p>{t('P_DocMe.p9')}</p>

            <ul className="ListBadges">
              <ToolBadge icon={""} name="API ChatBot" className="Api_CB" />
            </ul>
            <p>{t('P_DocMe.p10')}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default DocMe