// models/QuestionPaper.js

const { DataTypes } = require('sequelize');
const sequelize = require('../path/to/your/sequelize/instance');

const QuestionPaper = sequelize.define(
  'QuestionPaper',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topics: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionPaperLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    solutionLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    questionPapersLinks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: [],
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'inProgress',
    },
  },
  {
    tableName: 'QuestionPapers',
    indexes: [
      { fields: ['name'] },
      { fields: ['grade'] },
      { fields: ['subject'] },
      { fields: ['topics'] },
    ],
  }
);

module.exports = QuestionPaper;