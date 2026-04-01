import React, { useEffect, ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  useEffect(() => {
    document.title = `${title} | GitaVox`;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description]);

  return <>{children}</>;
};

export default PageLayout;
