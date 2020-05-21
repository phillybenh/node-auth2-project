
exports.seed = function (knex) {

  const users = [
    {
      username: "Noah",
      password: "pwd",
      role: 3,
      department: "summer intern"
    },
    // just me to start this time
    // {
    //   username: "kelli",
    //   password: "stuffandthings",
    //   role: 1,
    // },
    // {
    //   username: "Maury",
    //   password: "meow",
    //   role: 2,
    // },
    // {
    //   username: "kimby",
    //   password: "meowmeow",
    //   role: 2
    // },
    // {
    //   username: "notme",
    //   password: "hasnorole",
    // },
  ];

  return knex("users").insert(users);
};