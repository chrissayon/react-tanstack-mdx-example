import { useEffect, useRef, useState } from 'react';
import styles from './IntersectionSidebar.module.scss';

type IntersectionSidebarProps = {
  className?: string;
};

/**
 * Intersection Sidebar that's used with the MDX blog.
 *
 * It reads all H2 elements on the document directly and displays the list
 */
export const IntersectionSidebar = (props: IntersectionSidebarProps) => {
  const [activeElement, setActiveElement] = useState('');
  const elements = useRef<NodeListOf<HTMLHeadingElement>>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check for the last intersecting element occuring, then set that as active
        let lastIntersectingElement = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lastIntersectingElement = entry.target.innerHTML;
          }
        });

        if (lastIntersectingElement) {
          setActiveElement(lastIntersectingElement);
        }
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    // Get header elements so they can be displayed
    elements.current = document.querySelectorAll('h2');

    elements.current.forEach((value) => {
      observer.observe(value);
    });

    return () => {
      observer.disconnect();
    };
  });

  if (!elements.current) {
    return;
  }

  const mappedElements = [...elements.current].map((value) => {
    return (
      <div
        key={value.innerText}
        className={`${styles.text} ${value.innerText == activeElement && styles.active}`}
      >
        {value.innerText}
      </div>
    );
  });

  return (
    <aside className={`${styles.sidebar} ${props.className}`}>
      {mappedElements}
    </aside>
  );
};
