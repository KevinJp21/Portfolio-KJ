import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Article from '../../Components/Articles/Articles'
import RestauranteIMG from '../../assets/Images/restaurantescocina.webp'
import { useTranslation } from 'react-i18next'
import '../Articles.css'
const RestauranteSCocina = () => {
    const { t } = useTranslation();

    const content = [
        <p>{t('P_RestS.intro')}</p>,
        <h2>{t('P_RestS.subtitle1')}</h2>,
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li1') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li2') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li3') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li4') }}></li>
        </ul>,
        <h3>{t('P_RestS.subtitle2')}</h3>,
        <ul className='ProjectSol'>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li5') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li6') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li7') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('P_RestS.li8') }}></li>
            <li><a target='_Blank' href="https://github.com/KevinJp21/API-Food">{t('P_RestS.li9')}</a></li>
        </ul>,
        <h2>{t('P_RestS.subtitle3')}</h2>,
        <p>{t('P_RestS.p1')}</p>,

    ]
  return (
    <Layout>
        <main className="PageProject P_RestauranteSCocina">
                <Article
                    title={t('P_RestS.title')}
                    github='https://github.com/KevinJp21/RestauranteSCocina-ReactJS'
                    demo='https://restaurantescocina.netlify.app/'
                    imgSrc={RestauranteIMG}
                    imgAlt="Imagen del proyecto restaurantescocina"
                    content={content}
                />
            </main>
    </Layout>
  )
}

export default RestauranteSCocina