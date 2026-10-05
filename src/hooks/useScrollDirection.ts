import { useEffect,useState } from 'react';
export function useScrollDirection(){const [direction,setDirection]=useState<'up'|'down'>('up');useEffect(()=>{let last=scrollY;const fn=()=>{setDirection(scrollY>last?'down':'up');last=scrollY};addEventListener('scroll',fn,{passive:true});return()=>removeEventListener('scroll',fn)},[]);return direction}
