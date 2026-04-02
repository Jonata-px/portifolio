import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_BASE_URL } from '../../config/constants';

const Seo = () => {
  const location = useLocation();
  const canonicalUrl = `${SITE_BASE_URL}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Seo;
