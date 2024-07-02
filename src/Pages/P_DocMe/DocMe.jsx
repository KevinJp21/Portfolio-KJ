import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <p>{t('P_DocMe.intro')}</p>,
    <h2>{t('P_DocMe.subtitle1')}</h2>,
    <p>{t('P_DocMe.p1')}</p>,
    <p>{t('P_DocMe.p2')}</p>,
    <p>{t('P_DocMe.p3')}</p>,
    <p>{t('P_DocMe.p4')}</p>,
    <h2>{t('P_DocMe.subtitle2')}</h2>,
    <p>{t('P_DocMe.p5')}</p>,
    <ul className='ProjectSol'>
      <li>{t('P_DocMe.li1')}</li>
      <li>{t('P_DocMe.li2')}</li>
      <li>{t('P_DocMe.li3')}</li>
      <li>{t('P_DocMe.li4')}</li>
      <li><a href="/Projects/Chatbot">{t('P_DocMe.li5')}</a></li>
    </ul>,
    <h2>{t('P_DocMe.subtitle3')}</h2>,
    <p>{t('P_DocMe.p6')}</p>,
    <ul className="ListBadges" key="ReactJS">
      <ToolBadge icon={<ReactJs />} name="ReactJS" className="ReactJS" />
    </ul>,
    <p>{t('P_DocMe.p7')}</p>,
    <ul className="ListBadges" key="expressjs">
      <ToolBadge icon="" name="ExpressJS" className="ExpressJS" />
    </ul>,
    <p>{t('P_DocMe.p8')}</p>,
    <ul className="ListBadges" key="mysql">
      <ToolBadge icon={<MySQL />} name="MySQL" className="MySQL" />
    </ul>,
    <p>{t('P_DocMe.p9')}</p>,
    <ul className="ListBadges" key="Api_CB">
      <ToolBadge icon="" name="API Chatbot" className="Api_CB" />
    </ul>,
    <p>{t('P_DocMe.p10')}</p>,
    <h2>{t('P_DocMe.subtitle4')}</h2>,
    <p>{t('P_DocMe.p11')}</p>
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | DocMe</title>
        <meta
          name="description"
          content="Descubre cómo DocMe revoluciona la gestión de citas médicas en Colombia. Este innovador sistema utiliza tecnología avanzada para personalizar agendas, optimizar servicios y ofrecer respuestas automáticas mediante un chatbot de inteligencia artificial. Mejora la accesibilidad y eficiencia en el agendamiento de citas médicas, superando obstáculos como la saturación de líneas y la falta de personal."
        />
        <meta
          name="keywords"
          content="Kevin Julio Pineda, portfolio, KevinJp21, ingeniero de sistemas, desarrollo frontend, proyectos tecnológicos, metodologías ágiles, arquitectura de software, inteligencia artificial, Gestión de citas médicas, Plataforma de salud digital, Chatbot médico, Inteligencia artificial en salud, Optimización de agendas médicas, Tecnología para atención médica, Innovación en servicios de salud, Accesibilidad en salud digital, Eficiencia en citas médicas, Soluciones tecnológicas para salud"
        />
        <meta name="author" content="Kevin Julio Pineda" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio | DocMe" />
        <meta property="og:description" content="Descubre cómo DocMe revoluciona la gestión de citas médicas en Colombia. Este innovador sistema utiliza tecnología avanzada para personalizar agendas, optimizar servicios y ofrecer respuestas automáticas mediante un chatbot de inteligencia artificial. Mejora la accesibilidad y eficiencia en el agendamiento de citas médicas, superando obstáculos como la saturación de líneas y la falta de personal." />
        <meta property="og:image" content="https://portfolio-kj.vercel.app/ArticleDocMe.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Captura de pantalla de la página de articulo del proyecto DocMe" />
        <meta property="og:url" content="https://portfolio-kj.vercel.app/Projects/DocMe" />
        <meta property="og:updated_time" content="2024-07-03T09:30:00Z" />
      </Helmet>
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
    </HelmetProvider>

  );
};

export default DocMe;