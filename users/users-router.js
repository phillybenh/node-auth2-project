const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const { checkRoles } = require("./users-service.js");

router.use(restricted);

router.get("/", (req, res) => {
    console.log("get", req)
    Users.find()
        .then(users => {
            res.status(200).json({ users, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});

// stretch - find by the users department
router.get("/myDept", (req, res) => {
    // console.log(req.jwt.department)
    Users.findBy({ department: req.jwt.department })
        .then(users => {
            res.status(200).json({ users, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});

// not quite the stretch, but could be useful
router.get("/:department", (req, res) => {
    // console.log(req.params.department)
    Users.findBy({ department: req.params.department })
        .then(users => {
            res.status(200).json({ users, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});



module.exports = router;