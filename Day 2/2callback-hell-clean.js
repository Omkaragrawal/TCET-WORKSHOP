//Callback
function votingBooth (age, parameters, callbackFunction) {
    console.log('A person has entered the voting centre.');

    const isError = age < 18;
    const errorMessage = isError ? new Error('The person is not allowed to vote') : undefined;

    setTimeout(() => callbackFunction(errorMessage, parameters, applyColorOnNail), 20);

    console.log('A person has exited the voting centre.');
}

const votingStatus = function (err, parameters, callbackFunction) {
    if (err) {
        console.error(err.message);
        return;
    }

    setTimeout(() => callbackFunction(parameters, punchVoteInEvmMachine), 20);
}

votingBooth(26, 'The person has successfully voted and', votingStatus);



const applyColorOnNail = function (parameters, callbackFunction) {
    console.log('Indelible ink application process started.');

    setTimeout(() => callbackFunction(parameters, checkVoteInVvpatMachine), 20);

    console.log('Indelible ink application process completed.');
}


const punchVoteInEvmMachine = function (parameters, callbackFunction) {
    console.log('A person has started the process of punching in a vote in EVM.');

    setTimeout(() => callbackFunction(parameters, submitVoteStatus), 20);

    console.log('A person has completed the process of punching in a vote in EVM.');
}

const checkVoteInVvpatMachine = function (parameters, callbackFunction) {
    console.log('The person has started the process of verifying the voter slip in VVPAT machine.');

    setTimeout(() => callbackFunction(parameters), 20);

    console.log('The person has completed the process of verifying the voter slip in VVPAT machine.');
}

const submitVoteStatus = function (parameters) {
    console.log(parameters + ' has successfully completed the final step of submitting the vote.');
}

console.log('After the I/O operation is completed.');