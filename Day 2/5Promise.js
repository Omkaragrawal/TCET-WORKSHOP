const DEFAULT_WAIT_PERIOD = 2000;

const votingBooth = (age, parameters) => new Promise((resolve, reject) => {
    console.log('A person has entered the voting centre.');

    setTimeout(() => {
        if (age < 18) {
            reject(new Error('The person is not allowed to vote'));
        } else {
            resolve(parameters);
        }
    }, DEFAULT_WAIT_PERIOD);
});

votingBooth(26, 'The person has successfully voted and').then (
    function (parameters) {
        console.log('Indelible ink application process started.');
        
        setTimeout(() => {}, DEFAULT_WAIT_PERIOD);

        console.log('Indelible ink application process completed.');
        return parameters;
    }
).then(
    function (parameters) {
        console.log('A person has started the process of punching in a vote in EVM.');
    
        setTimeout(() => {}, DEFAULT_WAIT_PERIOD)

        console.log('A person has completed the process of punching in a vote in EVM.');

        return parameters;
    }
).then(
    function (parameters) {
        console.log('The person has started the process of verifying the voter slip in VVPAT machine.');
    
        setTimeout(() => parameters, DEFAULT_WAIT_PERIOD)

        console.log('The person has completed the process of verifying the voter slip in VVPAT machine.');

        return parameters;
    }
).then(
    function (parameters) {
        console.log(parameters + ' has successfully completed the final step of submitting the vote.');
    }
).then (
    () => console.log('A person has exited the voting centre.')
).then (
    () => console.log('After the I/O operation is completed.')
);