import tableau from "tableau-api";
import React, { useEffect, useRef } from 'react';

export default function WhereToInvestTableauC() {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/Rent_17003563477280/Story1?:language=en-US&:display_count=n&:origin=viz_share_link";
  useEffect(() => {
    ref.current = new window.tableau.Viz(ref.current,url);
  }, [])
  return (
    <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
  );
}