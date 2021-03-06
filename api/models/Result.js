/**
 * Result.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // No defined attributes, results are schemaless and are arbitrary, per profiler
  attributes: {
    dataset: {
      model: 'dataset'
    },
    profiler: {
      type: 'string'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.dataset;
      delete obj.createdAt;
      delete obj.updatedAt;
      delete obj.id;
      return obj;
    }
  }

};

