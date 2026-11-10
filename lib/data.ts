import {LayoutDashboard,Sparkles,Landmark,Files,FolderLock,CalendarDays,WalletCards,Bell,History,LifeBuoy,Settings,BadgeIndianRupee,UsersRound,House,Baby,MapPinned,Building2,Zap,HandCoins,MessagesSquare} from 'lucide-react';
export const nav=[['Overview','అవలోకనం',LayoutDashboard],['AI Citizen Assistant','ఏఐ సహాయకుడు',Sparkles],['Government Services','ప్రభుత్వ సేవలు',Landmark],['My Applications','నా దరఖాస్తులు',Files],['Document Vault','పత్రాల భాండాగారం',FolderLock],['Appointment Booking','అపాయింట్‌మెంట్లు',CalendarDays],['Payments & Receipts','చెల్లింపులు',WalletCards],['Notifications','నోటిఫికేషన్లు',Bell],['Conversation History','సంభాషణల చరిత్ర',History],['Help & Support','సహాయం',LifeBuoy],['Settings','సెట్టింగ్‌లు',Settings]] as const;
export const services=[
 ['Income Certificate','ఆదాయ ధృవపత్రం','Proof of annual income','Certificates',BadgeIndianRupee,'green'],
 ['Caste Certificate','కుల ధృవపత్రం','Community certification','Certificates',UsersRound,'purple'],
 ['Residence Certificate','నివాస ధృవపత్రం','Proof of residence','Certificates',House,'blue'],
 ['Birth Certificate','జనన ధృవపత్రం','Birth registration record','Certificates',Baby,'orange'],
 ['Land Records','భూమి రికార్డులు','Access property records','Land & property',MapPinned,'cyan'],
 ['Property Tax','ఆస్తి పన్ను','Manage property dues','Payments',Building2,'rose'],
 ['Electricity Bill','విద్యుత్ బిల్లు','Manage electricity dues','Payments',Zap,'orange'],
 ['Government Schemes','ప్రభుత్వ పథకాలు','Explore potential benefits','Benefits',HandCoins,'green'],
 ['Grievance Registration','ఫిర్యాదు నమోదు','Prepare a citizen complaint','Support',MessagesSquare,'purple'],
 ['Appointment Booking','అపాయింట్‌మెంట్ బుకింగ్','Schedule a department visit','Appointments',CalendarDays,'blue']] as const;
export type AppRecord={id:string,service:string,date:string,status:string,department:string};
export const seedApps:AppRecord[]=[{id:'DEMO-1024',service:'Residence Certificate',date:'2026-11-09',status:'Under Review',department:'Revenue'},{id:'DEMO-1023',service:'Income Certificate',date:'2026-11-08',status:'Needs documents',department:'Revenue'},{id:'DEMO-1022',service:'Land Records',date:'2026-11-07',status:'Submitted',department:'Land administration'},{id:'DEMO-1021',service:'Birth Certificate',date:'2026-11-05',status:'Completed',department:'Civil registration'}];
export const today=()=>new Date().toLocaleDateString('en-CA');
