const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (msg, to) {
    this.chatroom.send(msg, this, to);
  },
  recieve: function (msg, from) {
    console.log(`From: ${from.name} to ${this.name}: ${msg}`)
  }
}

const Chatroom = function () {
  let users = {};

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (msg, from, to) {
      if (to) {
        //Single User Msg
        to.recieve(msg, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(msg, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('Hello Jeff', jeff);
jeff.send('Hello Everyone');