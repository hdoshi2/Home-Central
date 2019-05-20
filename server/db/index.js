"use strict";

const db = require("./database");
const Sequelize = require("sequelize");

const Landlord = db.define("landlord", {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://listimg.pinclipart.com/picdir/s/202-2021041_apartment-buildings-city-clipart.png"
  }
});

const Building = db.define("building", {
  buildingName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn0.iconfinder.com/data/icons/robot-3-2/512/RobotV2-52-512.png"
  }
});

const Apartment = db.define("apartment", {
  unit: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  bedrooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  bathrooms: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  squareFootage: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  occupied: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  tenantName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
});

Building.belongsTo(Landlord);
Landlord.hasMany(Building);

Apartment.belongsTo(Building);
Building.hasMany(Apartment);

module.exports = {
  // Include your models in this exports object as well!
  Landlord,
  Building,
  Apartment,
  db
};

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)
