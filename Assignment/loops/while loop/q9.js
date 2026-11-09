let i = 1;

while (i <= 10) {
    console.log(i);
    if (i === 6) {
        break;
    }
    i++;
    // if (i === 6) {
    //     break;                // this is wrong because interpreter read it after being updated immediately even before going to be printed
    // }


}