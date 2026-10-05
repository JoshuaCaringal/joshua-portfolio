import type {ReactNode} from 'react'; export const Container=({children,className=''}:{children:ReactNode,className?:string})=><div className={`container ${className}`}>{children}</div>;
