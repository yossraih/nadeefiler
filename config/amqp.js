/**
 * Default amqp configuration
 * (sails.config.amqp)
 *
 */

module.exports.amqp = {

  /***************************************************************************
  *                                                                          *
  * AMQP server URL                                                          *
  *                                                                          *
  ***************************************************************************/
  // url: "amqp://localhost",

  /***************************************************************************
  *                                                                          *
  * Queue to publish messages to                                             *
  *                                                                          *
  ***************************************************************************/
  queue: process.env.AMQP_QUEUE || 'sails'

};
