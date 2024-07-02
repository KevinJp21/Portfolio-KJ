import React from 'react';
import PropTypes from 'prop-types';
import './Articles.css'
import { ReactComponent as GitHubIcon } from '../../assets/Icons/GitHub.svg'
import { ReactComponent as LinkIcon } from '../../assets/Icons/LinkIcon.svg'


const Article = ({ title,github, demo, imgSrc, imgAlt, content }) => {
  return (
    <article itemType="http://schema.org/Article">
      <header className="projectHeader">
        <div className="projectHeaderMeta">
            <h1 itemProp="name">{title}</h1>
            <div className="LinksProject">
            <a target="-blank" href={github}><span>Repositorio GitHub</span><GitHubIcon width="30px" height="30px" /></a>
            <a target="-blank" href={demo}><span>Demo</span><LinkIcon width="25px" height="25px" /></a>
            </div>
        </div>
        <picture>
          <img decoding="async" itemProp="image" src={imgSrc} alt={imgAlt} width="800px" height="450px" />
        </picture>
      </header>

      <div className="projectBody" itemProp="articleBody">
        {content.map((section, index) => (
          <React.Fragment key={index}>
            {section}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Article;
