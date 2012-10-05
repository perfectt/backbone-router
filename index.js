
/**
 * Dependencies
 */

var Backbone = require('backbone');

/**
 * Expose the new router
 */

module.exports = Backbone.Router.extend({

  /**
   * Pause
   */

  pause: function() {}

  /**
   * Resume
   */

, resume: function() {}

  /**
   * Setup
   */

, setup: function() {
    this.views = {};
  
    this.on('pause', function() {
      if (this.view) this.view.trigger('renderedStateChange', false);
      this.pause();
    }, this);

    this.on('resume', function() {
      if (this.view) this.view.trigger('renderedStateChange', true);
      this.resume();
    }, this);
  }

});
