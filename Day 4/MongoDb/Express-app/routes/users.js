var express = require('express');
const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');
const UserModel = require('../database/model/User');

const middlewareWrapper = require('../tools/middleware-wrapper');





var router = express.Router();

/* GET users listing. */
router.get('/', middlewareWrapper(async function(req, res, next) {
  // let userData = await readFile(join(__dirname, '..', 'data', 'data.json'));

  let usersData = await UserModel.find();

  if (!usersData) {
    throw new Error('No User Found');
  }

  res.json(usersData);
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
  const reportedData = req.body;

  if (typeof reportedData === 'object') {
    let usersData = await UserModel.insertMany([{
      name: reportedData.name,
      email: reportedData.email,
      password: reportedData.password,
    }]);
    
    res.json(usersData);
  } else {
    res.json({});
  }

}));

router.delete('/delete', middlewareWrapper(async function (req, res) {
  const { email } = req.body;

  if (email) {
    let usersData = await UserModel.deleteOne({ email });
    
    res.json(usersData);
  } else {
    res.json({});
  }

}));

router.patch('/update', middlewareWrapper(async function (req, res) {
  const { email, updateData } = req.body;

  if (email) {
    let usersData = await UserModel.updateOne({ email },
      updateData,
    );
    
    res.json(usersData);
  } else {
    res.json({});
  }

}));

module.exports = router;
