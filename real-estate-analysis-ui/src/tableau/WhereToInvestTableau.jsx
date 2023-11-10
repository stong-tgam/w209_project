import tableau from "tableau-api";
import React, { useEffect, useRef } from 'react';

export default function WhereToInvestTableau() {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/shared/C5S88NR8D?:display_count=n&:origin=viz_share_link";
  useEffect(() => {
    ref.current = new window.tableau.Viz(ref.current,url);
  }, [])
  return (
    <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
  );
}