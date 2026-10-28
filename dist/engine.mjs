export const words = [
 ['Bus','Vehicle',['wheels','children','school','driver','seats','stop']],
 ['Ambulance','Vehicle',['siren','emergency','hospital','rescue','patient','urgent']],
 ['Pizza','Food',['cheese','slice','oven','round','topping','delivery']],
 ['Elephant','Animal',['trunk','large','grey','tusks','herd','ears']],
 ['Beach','Place',['sand','waves','shells','sun','coast','holiday']],
 ['Fire truck','Vehicle',['ladder','hose','red','rescue','water','siren']],
 ['Jungle','Place',['trees','wild','green','rain','dense','animals']],
 ['Ice cream','Food',['cold','cone','sweet','scoop','melts','summer']],
 ['Bicycle','Vehicle',['pedals','wheels','balance','chain','helmet','ride']],
 ['Dog','Animal',['bark','walk','loyal','tail','fetch','paws']],
 ['Cinema','Place',['screen','popcorn','tickets','dark','film','seats']],
 ['Mango','Fruit',['yellow','summer','sweet','juicy','seed','ripe']],
 ['Train','Vehicle',['tracks','station','carriage','platform','rail','journey']],
 ['Umbrella','Everyday object',['rain','handle','fold','shade','wet','cover']],
 ['Football','Sport',['goal','kick','team','pitch','net','match']],
 ['Penguin','Animal',['ice','waddle','bird','swim','colony','cold']],
 ['Library','Place',['books','quiet','shelf','read','borrow','study']],
 ['Birthday cake','Food',['candles','party','slice','icing','wish','sweet']],
 ['Aeroplane','Vehicle',['wings','airport','pilot','sky','flight','clouds']]
].map(([answer,hint,clues])=>({answer,hint,clues}));
export function resolveVote(votes, eligible) {
 const counts = Object.fromEntries(eligible.map(i=>[i,0]));
 for(const v of votes) {if(Object.hasOwn(counts,v)) counts[v]++;}
 const high = Math.max(...Object.values(counts));
 const tied = eligible.filter(i=>counts[i]===high);
 return {counts,tied,winner:tied.length===1?tied[0]:null};
}
export function scoresFor(count,impostor,accused) {
 return Array.from({length:count},(_,i)=>accused===null?0:i===impostor?(accused===impostor?0:30):(accused===impostor?20:-10));
}
export function validClue(text,answer) {
 const clean=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 return text.trim().length>0 && text.trim().length<=60 && !clean(text).includes(clean(answer));
}
