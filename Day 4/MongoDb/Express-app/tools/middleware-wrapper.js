const middleWareWrapper = (callback) =>
    (request, response, next) => {
        Promise.resolve(callback(request, response, next)).catch((err) => next(err));
    };

module.exports = middleWareWrapper;