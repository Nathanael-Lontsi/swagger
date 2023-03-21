const express = require('express');
const {
  getAllUsers,
  updateUserId,
  patchUsers,
  deleteUsers,
} = require('../database/user');
const { findUserById } = require('../database/user');
const { insertNewUser } = require('../database/user');
const router = express.Router();

router.get('/', async function (req, res) {
  const users = await getAllUsers();
  res.send(users);
});

router.post('/', async function (req, res) {
  const newUser = await insertNewUser(req.body);
  console.log('this is id', newUser);
  const usser = await findUserById(newUser.insertId);
  res.send(usser);
});

router.get('/:id', async function (req, res) {
  const user = await findUserById(req.params.id);
  res.send(user);
});

router.put('/:id', async function (req, res) {
  const update = await updateUserId(req.params.id);
  res.send(update);
});

router.patch('/:id', async function (req, res) {
  const patch = await patchUsers(req.params.id);
  res.send(patch);
});

router.delete('/:id', async function (req, res) {
  const deletAll = await deleteUsers(req.params.id);
  res.send(deletAll);
});

module.exports = router;
