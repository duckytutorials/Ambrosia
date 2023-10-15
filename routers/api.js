import { password } from "bun";

const express = require("express");
const monitordat = require("../mongoose/schema/monitor_data.js");
const UptimeArray = require("../mongoose/schema/uptime_array");
const UserData = require("../mongoose/schema/user");
const dayjs = require("dayjs");
const { QuickDB } = require("quick.db");
const qdb = new QuickDB({ filePath: "../local_db/local_store.sqlite" });
const bcrypt = require("bcrypt");
const router = express.router();

router.post("/:name/info", async (req, res) => {
  monitordat.find({ name: req.params.name }, (err, MD) => {
    if (err) {
      console.error("error:", err);
    } else {
      res.json(MD);
    }
  });
});

router.post("/:name/history", async (req, res) => {
  UptimeArray.find({ name: req.params.name }, (err, monitorData) => {
    res.json(monitorData);
  });
});

router.post("/admin/monitor/add", async (req, res) => {
  const ua = new UptimeArray({
    name: req.body.name,
    timestamp: Math.floor(Date.now() / 1000),
    status: "Unknown",
    ping: 0,
  });
  const md = new monitordat({
    name: req.body.name,
    type: req.body.type, // HTTP, TCP, UDP
    tsc: dayjs.format("MMMM D, YYYY h:mm A"), // Time Since Creation,
    uptime: 0, // HOW THE FUCK DO I CALCULATE THAT... Wait i am just stupid
    downtime: 0, // 0 Cause no data? https://a.pinatafarm.com/320x349/4889604c7b/megamind-no-b.jpg
  });
  ua.save();
  md.save();
  res.json({
    message: "Success! Successfully created the monitor",
    title: "Success",
    icon: "success",
  });
});

router.post("/:name/history", async (req, res) => {
  UptimeArray.find({ name: req.params.name }, (err, monitorData) => {
    res.json(monitorData);
  });
});

router.post('/admin/user/add', async (req, res) => {
  UserData.findOne({ name: req.session.username }, (err, userdata) => {
    if (!err && userdata) {
      if (userdata.role !== 'Admin') {
        res.json({
          title: 'Forbidden 403',
          description: 'You are unable to change/add a user',
          icon: 'error',
        });
      } else {
        // Check if the username is already used
        UserData.findOne({ name: req.body.name }, (err, existingUser) => {
          if (err) {
            res.json({
              title: 'Error',
              description: 'An error occurred while checking for existing users',
              icon: 'error',
            });
          } else if (existingUser) {
            res.json({
              title: 'Username Taken',
              description: 'The username is already in use',
              icon: 'error',
            });
          } else {
            // Create a new user if the username is not already used
            const newUser = new UserData({
              name: req.body.name,
              role: req.body.role,
              password: password.hash(req.body.password, 'bcrypt'),
            });
            newUser.save((err) => {
              if (err) {
                res.json({
                  title: 'Error',
                  description: 'Failed to create a new user',
                  icon: 'error',
                });
              } else {
                res.json({
                  title: 'Success!',
                  description: 'Successfully created a new user',
                  icon: 'success',
                });
              }
            });
          }
        });
      }
    } else {
      res.json({
        title: 'Error',
        description: 'An error occurred while checking user permissions',
        icon: 'error',
      });
    }
  });
});

router.post("/login", async (req, res) => {
  UserData.findone({ name: req.body.username }, (err, userdata) => {
    if (!userdata) {
      res.json({
        title: "No user",
        discription: "No user with that password and name",
        icon: "error",
      });
    } else {
      if (password.verify(req.body.password, userdata.password)) {
        req.session.username = req.body.username;
        req.session.not_listd = userdata.password;
        req.session.role = userdata.role;
      } else {
        res.json({
          title: "No user",
          discription: "No user with that password and name",
          icon: "error",
        });
      }
    }
  });
});



module.exports = router;