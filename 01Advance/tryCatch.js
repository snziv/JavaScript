// promises in future instead of try catch
const convetToRs = (dollar) => dollar * 64;
// const rs = convetToRs(10);
// const rs = convetToRs('five');
// console.log(rs);

// console.log(isNaN(21));
// console.log(isNaN(21.21));
// console.log(isNaN('five'));

//manually handing error conditions 
const convetToRs1 = (dollar) => {
    if (typeof dollar !== 'number') { // or if(typeof dollar === 'number')
        throw Error('Amount should be number')//manually send error
        return 'Amount should be number';
    }
    else {
        return dollar * 64;
    }
}
// console.log('convertRs1 starts here');
// console.log(convetToRs1(12.2));
// console.log(convetToRs1('five'));
// console.log('convertRs1 ends here');

//using try catch since handling error is not 
//possible in every case
//Try catch to avoid program freeze in javascript

const convertToRs2 = (dollar) => {
    try {
       return convetToRs1(dollar);
    } catch (error) {        
        // return  'Error : Amount should be number.'; // to send some info with full error info
        return error; // for full error info without freezing code
    }
}
console.log('convertToRs2 starts here');
console.log(convertToRs2(12.2));
console.log(convertToRs2('five'));
console.log('convertToRs2 ends here');
