exports.handle404Errors = (req, res) => {
    res.status(404).send({ msg: 'Route Not Found' })
};

exports.handleCustomErrors = (err, req, res, next) => {
    if (err.status && err.msg) {
        res.status(err.status).send({ msg: err.msg });
    } else next(err);
};

exports.handlePsqlErrors = (err, req, res, next) => {
    if (err.code === '22P02') {
        res.status(400).send({ msg: 'Bad Request' });
    } else if (err.code === '42601') {
        res.status(400).send({ msg: 'Bad Request: Order should be \'asc\' or \'desc\'' })
    } else if (err.code === '42703') {
        res.status(400).send({ msg: 'Bad Request: Invalid column name' });
    } else if (err.code === '23503') {
        res.status(422).send({ msg: 'Bad Request: Data does not exist' });
    } else if (err.code === '23502') {
        res.status(400).send({ msg: 'Bad Request: NULL values not authorised' });
    }
    else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({ msg: 'Internal Server Error' });
};
