import { memo } from 'react';

interface TwitterAuthorLinkProps {
  handle: string;
  url: string;
}

const TwitterAuthorLink = memo(({ handle, url }: TwitterAuthorLinkProps) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    @{handle}
  </a>
));

TwitterAuthorLink.displayName = 'TwitterAuthorLink';

export default TwitterAuthorLink;