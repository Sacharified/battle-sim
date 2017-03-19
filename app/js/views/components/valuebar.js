import Backbone from 'backbone';
import _ from 'underscore';

var ValueBar = Backbone.View.extend({
    className: 'js-value-bar value-bar',
    
    initialize: function(options) {
        ValueBar.__super__.initialize.apply(this, arguments);
        
        this.valueKey = options.valueKey;
        this.maxKey = options.maxKey;
        
        this.value = this.model.get(this.valueKey);
        this.maxValue = this.model.get(this.maxKey);
        
        _.bindAll(this, 'updateValue');
        
        this.model.on('change:hp', this.updateValue);
    },
    
    render: function() {
        ValueBar.__super__.render.apply(this, arguments);
        
        this.$maxBar = this.$el.html('<div class="js-max-value child-bar bar-max-value"></div>');
        this.$el.append('<div class="js-current-value child-bar bar-current-value"></div>');
        this.$currentValueBar = this.$('.js-current-value');
        this.$currentValueNum = this.$currentValueBar.append('<span class="js-current-value-number current-value-number">' + this.getValue() + '</div>');
        this.updateValue();
        
        return this;
    },
    
    updateValue: function() {
        this.value = this.getValue();
        let percentage = this.value / this.maxValue * 100;
        console.log(this.$currentValueBar);
        this.$currentValueBar.css({
            'width' : percentage + '%'
        });
    },
    
    getValue: function() {
        return this.model.get(this.valueKey);
    }
});

export default ValueBar;