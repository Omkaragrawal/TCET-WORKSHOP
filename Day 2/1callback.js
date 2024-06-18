//Callback
function votingBooth (age, parameters, callbackFunction) {
    console.log('A person has entered the voting centre.');

    const isError = age < 18;
    const errorMessage = isError ? new Error('The person is not allowed to vote') : undefined;

    setTimeout(() => callbackFunction(errorMessage, parameters), 3000);

    console.log('A person has exited the voting centre.');
}

const votingStatus = function (err, parameters) {
    if (err) {
        console.error(err.message);
        return;
    }

    console.log(parameters);
}

votingBooth(17, 'The person has successfully voted.', votingStatus);

console.log('After the I/O operation is completed.');