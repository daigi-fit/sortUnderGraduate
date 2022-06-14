const fs = require("fs");
const {parse} = require("csv-parse/sync");

ignoreList = ["s21a2036@bene.fit.ac.jp","s20g1005@bene.fit.ac.jp","s19e2054@bene.fit.ac.jp","s21a1036@bene.fit.ac.jp","s21b2052@bene.fit.ac.jp","s20c2046@bene.fit.ac.jp","s2052005@bene.fit.ac.jp","s20m1075@bene.fit.ac.jp","s22g1137@bene.fit.ac.jp","s20f1025@bene.fit.ac.jp","s20g1039@bene.fit.ac.jp","s19k1158@bene.fit.ac.jp","s2151031@bene.fit.ac.jp","s21g1035@bene.fit.ac.jp"]




const AttendRecords = ((parse(fs.readFileSync("attend.csv"), {columns:false}).filter(value=>{
    return value[5]==1;
})).filter(value=>{
    return value[3].match(`s[0-9]{2}[abcefgkmx5][0-9]{4}@bene.fit.ac.jp`);
})).filter(value=>{
    return ignoreList.indexOf(value[3]) == -1;
});

const AttendList = AttendRecords.map(value=>{
    return value[3];
}) 


console.log(AttendRecords)


const DelegationRecords = ((parse(fs.readFileSync("delegation.csv"), {columns:false}).filter(value=>{
    return value[5]==1;
})).filter(value=>{
    return value[3].match(`s[0-9]{2}[abcefgkmx5][0-9]{4}@bene.fit.ac.jp`);
})).filter(value=>{
    return ignoreList.indexOf(value[3]) == -1;
});





/*


console.log(DelegationRecords);



fs.writeFileSync("clubmail.txt", ClubMailData.join(";"))
fs.writeFileSync("topmail.txt", ClubTopMail.join(";"))
//*/

