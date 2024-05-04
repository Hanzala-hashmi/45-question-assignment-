let Ordinal_Numbers:number[] = [1,2,3,4,5,6,7,8,9]; 
for (let number of Ordinal_Numbers )
{       let ordinal_Ending: string;
    if(number === 1){
        ordinal_Ending = "st"
    }else if (number === 2){
            ordinal_Ending = "nd"
    }else if(number === 3){
        ordinal_Ending = "rd"
    }else{
        ordinal_Ending = "th"
    }
        console.log(`${number} ${ordinal_Ending}`);
}
