import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import {useEffect,useRef} from 'react';
import {X} from 'lucide-react';
const variants=cva('btn',{variants:{variant:{primary:'primary',secondary:'secondary',ghost:'ghost'}},defaultVariants:{variant:'secondary'}});
export function Button({variant,asChild,className='',...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'secondary'|'ghost',asChild?:boolean}){const Tag=asChild?Slot:'button';return <Tag className={variants({variant})+' '+className} {...props}/>}
export function Dialog({title,onClose,children}:{title:string,onClose:()=>void,children:React.ReactNode}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{ref.current?.showModal()},[]);return <dialog ref={ref} onCancel={onClose}><div className="dialog-head"><h2>{title}</h2><button onClick={onClose} aria-label="Close"><X size={19}/></button></div>{children}</dialog>}
export function Logo(){return <svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect x="1" y="1" width="34" height="34" rx="10" fill="#cbf8df"/><g stroke="#145944" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="m8 14 10-6 10 6M9 17h18M11 21v5m7-5v5m7-5v5M8 29h20"/></g></svg>}
