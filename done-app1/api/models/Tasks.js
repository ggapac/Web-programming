/**
 * Tasks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    taskid: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: 'string',
      size: 45
    },
    deadline: {
      type: 'date'
    },
    finished: {
      type: 'date'
    },
    status: {
      type: 'integer',
      defaultsTo: 0
    },
    priority: {
      type: 'integer'
    },
    description: {
      type: 'string',
      size: 200
    },
    tag: {
      model: 'tags'
    },
    user: {
      model: 'user'
    }
  }
};
