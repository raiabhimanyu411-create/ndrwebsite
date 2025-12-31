export const setSEO = ({ title, description, keywords, canonical }) => {
  if (title) document.title = title;

  const setMetaTag = (name, content) => {
    if (!content) return;

    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  setMetaTag("description", description);
  setMetaTag("keywords", keywords);
  setMetaTag("robots", "index, follow");

  // Canonical
  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }
};
