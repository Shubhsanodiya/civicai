import {useEffect,useState} from 'react';
export function useStored<T>(key:string,initial:T){const [value,set]=useState<T>(initial);const [ready,r]=useState(false);useEffect(()=>{try{const v=localStorage.getItem('civic-'+key);if(v)set(JSON.parse(v))}catch{}r(true)},[key]);useEffect(()=>{if(ready){try{localStorage.setItem('civic-'+key,JSON.stringify(value))}catch{}}},[key,value,ready]);return [value,set] as const}
export type Doc={name:string,url?:string,type?:string};
export type Message={role:'assistant'|'user',text:string};
export type Flow={service:string,stage:number,name:string,district:string,purpose:string,doc:string,messages:Message[]};
export const emptyFlow:Flow={service:'',stage:0,name:'',district:'',purpose:'',doc:'',messages:[]};
export function download(name:string,content:string){const u=URL.createObjectURL(new Blob([content],{type:'text/plain'}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),500)}
