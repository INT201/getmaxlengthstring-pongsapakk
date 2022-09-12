const { template } = require('@babel/core')


function getMaxLengthString(arrayOfString) {
let waitArr = []
if(arrayOfString === null || arrayOfString === undefined ) {
  return undefined
}
for (const maxLength of arrayOfString) { 
  if(waitArr.length === 0) {
    waitArr[0] = maxLength //print all array ssthingfkafdsasasfasdfhg
  }else if (waitArr[0].length < maxLength.length ){ // waitArr
    waitArr[0] = maxLength
  }else if( waitArr[0].length === maxLength.length ){
    // waitArr[1] = maxLength // >3 เดี๋ยวระเบิด
    waitArr.push(maxLength)
  }
} return waitArr
}
module.exports = getMaxLengthString
