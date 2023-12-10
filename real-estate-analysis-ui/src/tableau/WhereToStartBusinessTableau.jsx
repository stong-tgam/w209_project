import tableau from "tableau-api";
import React, { useEffect, useRef } from 'react';

export default function WhereToStartBusinessTableau() {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/views/W209_team3_where_to_start_the_business_v1_1/Story1?:language=en-US&:display_count=n&:origin=viz_share_link";
  useEffect(() => {
    ref.current = new window.tableau.Viz(ref.current,url);
  }, [])
  return (
    <div ref={ref} style={{width:'100%', margin:'auto'}}> </div>
  );
}
