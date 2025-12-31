import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { seoConfig } from "./seoConfig";
import { setSEO } from "./setSEO";

const SeoRouteHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoConfig[pathname];

    if (seo) {
      setSEO(seo);
    }
  }, [pathname]);

  return null;
};

export default SeoRouteHandler;
