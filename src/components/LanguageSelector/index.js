import React from 'react';
import { Link } from 'gatsby';

function LanguageSelector({ lang, location, className }) {
    return (
      <div>
      <Link activeStyle={{ textDecoration: `none`, pointerEvents: `none`,
   cursor: `default` }} className={className} to={`/fr/${location ? location.pathname : ''}`}>
        Français
      </Link> |&nbsp;
      <Link activeStyle={{ textDecoration: `none`, pointerEvents: `none`,
   cursor: `default` }} className={className} to={location ? location.pathname.replace('/' + lang + '/', '/') : '/'}>
        English
      </Link>
    </div>
    )
}

export default LanguageSelector;