const DEFAULT_WAIT_PERIOD = 2000;

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const votingBooth = async function (age, parameters) {
    console.log('A person has entered the voting centre.');

    await timeout(DEFAULT_WAIT_PERIOD);


    if (age < 18) {
        throw new Error('The person is not allowed to vote');
    }

    return parameters;
};

const applyColorOnNail = async function (parameters) {
    console.log('Indelible ink application process started.');

    await timeout(DEFAULT_WAIT_PERIOD);

    console.log('Indelible ink application process completed.');
    return parameters;
}

const punchVoteInEvmMachine = async function (parameters) {
    console.log('A person has started the process of punching in a vote in EVM.');

    await timeout(DEFAULT_WAIT_PERIOD);

    console.log('A person has completed the process of punching in a vote in EVM.');
    return parameters;
}

const checkVoteInVvpatMachine = async function (parameters) {
    console.log('The person has started the process of verifying the voter slip in VVPAT machine.');

    await timeout(DEFAULT_WAIT_PERIOD);

    console.log('The person has completed the process of verifying the voter slip in VVPAT machine.');
    return parameters;
}

const submitVoteStatus = async function (parameters) {
    console.log(parameters + ' has successfully completed the final step of submitting the vote.');
}

async function castVote() {
        let data = await votingBooth(26, 'The person has successfully voted and');
        data = await applyColorOnNail(data);
        data = await punchVoteInEvmMachine(data);
        data = await checkVoteInVvpatMachine(data);
        data = await submitVoteStatus(data);
        console.log('After the I/O operation is completed.');
}
castVote();