/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("posts", {
    id: {
      type: "Integer",
      notNull: true,
      primaryKey: true,
    },
    name: {
      type: "TEXT",
      notNull: true,
    },
    link: {
      type: "TEXT",
      notNull: true,
    },
    description: {
      type: "TEXT",
    },
  });
};

exports.down = (pgm) => {};
