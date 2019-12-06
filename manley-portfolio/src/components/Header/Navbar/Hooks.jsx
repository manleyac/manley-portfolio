import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
   useEffect(() => {
     const listener = event => {
       if (!ref.current || ref.current.contains(event.target)) {
         return;
       }
       handler();
     };
     window.addEventListener('scroll', listener);
     return () => {
       window.removeEventListener('scroll', listener);
     };
   },
   [ref, handler],
   );
 };