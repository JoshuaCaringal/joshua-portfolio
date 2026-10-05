import {ArrowUpRight} from 'lucide-react'; import type {ReactNode} from 'react';
export const Button=({children,href='#',dark=false}:{children:ReactNode,href?:string,dark?:boolean})=><a className={`button ${dark?'button-dark':''}`} href={href}>{children}<ArrowUpRight size={16}/></a>;
