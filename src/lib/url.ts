export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ExternalLinkProps = {
  target?: "_blank";
  rel?: "noopener noreferrer";
};

export function getExternalLinkProps(href: string): ExternalLinkProps {
  return isExternalHref(href)
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};
}
