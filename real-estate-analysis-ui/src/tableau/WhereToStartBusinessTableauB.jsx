import tableau from "tableau-api";
import React, { useEffect, useRef } from 'react';

export default function WhereToStartBusinessTableauB() {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/W209_team3_where_to_start_the_business_db2_v2/Story2?:language=en-US&:display_count=n&:origin=viz_share_link";
  useEffect(() => {
    ref.current = new window.tableau.Viz(ref.current,url);
  }, [])
  return (
    <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
  );
}