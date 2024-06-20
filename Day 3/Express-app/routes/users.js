var express = require('express');
const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');

const middlewareWrapper = require('../tools/middleware-wrapper');



var router = express.Router();

/* GET users listing. */
router.get('/', middlewareWrapper(async function(req, res, next) {
  let userData = await readFile(join(__dirname, '..', 'data', 'data.json'));

  userData = JSON.parse(userData);

  if (!userData) {
    throw new Error('No User Found');
  }

  res.json(userData);
}));

router.get('/:userId', middlewareWrapper(async function(req, res, next) {
  let userData = await readFile(join(__dirname, '..', 'data', 'data.json'), 'utf8');
  userData = JSON.parse(userData);

  console.log(req.params);

  const user = userData.find((user) => Number(req.params.userId) === user.id);

  if(!user) {
    throw new Error('No User Found');
  }

  res.json(user);
}));

router.post('/', middlewareWrapper(async function (req, res) {
  let userData = await readFile(join(__dirname, '..', 'data', 'data.json'), 'utf8');
  userData = JSON.parse(userData);

  if (!userData) {
    userData = [];
  }

  const reportedData = req.body;

  if (typeof reportedData === 'object') {
    userData.push(reportedData);
    res.json(reportedData);
    // Update the file content here
  } else {
    res.json({});
  }

}))

module.exports = router;
