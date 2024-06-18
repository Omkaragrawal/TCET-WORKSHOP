function votingBooth(age, parameters, callbackFunction) {
    console.log('A person has entered the voting centre.');

    const isError = age < 18;
    const errorMessage = isError ? new Error('The person is not allowed to vote') : undefined;

    setTimeout(() => callbackFunction(errorMessage, parameters, function (parameters, callbackFunction) {
        console.log('Indelible ink application process started.');

        setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
            console.log('A person has started the process of punching in a vote in EVM.');
        
            setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
                console.log('The person has started the process of verifying the voter slip in VVPAT machine.');
            
                setTimeout(() => callbackFunction(parameters), 20);
            
                console.log('The person has completed the process of verifying the voter slip in VVPAT machine.');
            }), 20);
        
            console.log('A person has completed the process of punching in a vote in EVM.');
        }), 20);

        console.log('Indelible ink application process completed.');
    }), 20);

    console.log('A person has exited the voting centre.');
}

votingBooth(26, 'The person has successfully voted and', function (err, parameters, callbackFunction) {
    if (err) {
        console.error(err.message);
        return;
    }

    setTimeout(() => callbackFunction(parameters, function (parameters, callbackFunction) {
        console.log('A person has started the process of punching in a vote in EVM.');
    
        setTimeout(() => callbackFunction(parameters, function (parameters) {
            console.log(parameters + ' has successfully completed the final step of submitting the vote.');
            
        }), 20);
    
        console.log('A person has completed the process of punching in a vote in EVM.');
    }), 20);
});
