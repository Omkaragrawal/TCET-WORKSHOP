function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TEMP1_FUNCTION = async function() {
console.log('Start of function');

    await timeout(1000);
    console.log('In between');
    await timeout(1000);

console.log('End of function');
};

TEMP1_FUNCTION();