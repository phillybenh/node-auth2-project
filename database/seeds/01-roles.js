
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const roles = [
    {
      name: "admin", 
    },
    {
      name: "user", 
    },
    {
      name: "guest", // for future expansion for a view-only role
    },
  ];

  return knex("roles").insert(roles);
};

