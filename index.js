
/**
 * Dependencies
 */

var Backbone = require('backbone');

/**
 * Expose `Router`
 */

var Router = module.exports = Backbone.Router.extend();

/**
 * Pause
 */

Router.prototype.pause = function() {};

/**
 * Resume
 */

Router.prototype.resume = function() {};

/**
 * Setup
 */

Router.prototype.setup = function() {
  this.views = {};
  
  this.on('pause', function() {
    if (this.view) this.view.trigger('renderedStateChange', false);
    this.pause();
  }, this);

  this.on('resume', function() {
    if (this.view) this.view.trigger('renderedStateChange', true);
    this.resume();
  }, this);
};
