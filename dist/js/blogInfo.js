define(["jquery"],function(n){n(document).ajaxStart(function(){n(".wrap").show()}),n(document).ajaxStop(function(){n(".wrap").hide()})});