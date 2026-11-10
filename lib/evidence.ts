// A retrieval node returns a partial state update suitable for a StateGraph.
// Only a server-managed corpus should be connected to this adapter.
export type OfficialPassage = {service:string,jurisdiction:string,source_url:string,passage:string,expires_at:string,checked_at:string};
type Query={service:string,jurisdiction:string};
interface SourceIndex { search(query:Query):Promise<OfficialPassage[]> }
export async function retrieveEvidence(query:Query,index:SourceIndex){
 const passages=await index.search(query).catch(()=>[]);
 const sources=passages.filter(p=>{
  try{const u=new URL(p.source_url);return u.protocol==='https:'&&/\.(gov|nic)\.in$/i.test(u.hostname)&&p.service===query.service&&p.jurisdiction===query.jurisdiction&&Date.parse(p.expires_at)>Date.now()&&Date.parse(p.checked_at)<=Date.now()}catch{return false}
 });
 return {sources,verification:sources.length?'Source available for review.':'Official verification required.'};
}
export const demoIndex:SourceIndex={async search(){return []}};
