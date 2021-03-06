/**
 * MOA Text v1.1.0 - Mouse Over Animation for Text in jQuery
 * Written by Osamu AKAMATSU (Bitmeister Inc.)
 * 
 * Copyright (c) Bitmeister Inc.
 * 
 * This software is under the MIT license (MIT-LICENSE.txt).
 *
 * http://sourceforge.jp/projects/moatext/
 *
 * Bitmeister Inc.
 * http://www.bitmeister.jp
 * 
 * @author Osamu AKAMATSU (Bitmeister Inc.)
 * @version 1.1.0
 *
 * You can use this jQuery plugin for adding flavor to your web site.
 * By this plugin, text messages on your site are animated at mouseover (and mouseout).
 * 
 * Usage
 *   Call the moatext() function or set prefixed class on your page.
 *
 *   By function
 *     $(selector).moatext(options)
 *     
 *     <script type="text/javascript" language="JavaScript"><!--
 *       $(function(){
 *         $(".moamoa").moatext();
 *       });
 *     // -->
 *     </script>
 *     
 *     <div class="moamoa">This message is animated!</div>
 *     
 *     *If moatext() is called no parameter, default effect 'lens' is performed.
 *   
 *   By prefixed class
 *     <div class="moatext_lens">This message is animated!</div>
 *     
 *     class             description
 *     ----------------------------------
 *     "moatext_lens"    'lens' effect
 *     "moatext_wave"    'wave' effect
 *     "moatext_opacity" 'opacity' effect
 *     
 *     *About effects, please read below.
 *   
 * options
 * 
 *   effect:[effect1,effect2...]
 *     "lens"        animate font-size (default)
 *     "wave"        animate top and right margin
 *     "opacity"     animate opacity
 *   oneway:{true/false}
 *     true          perform only one animation at mouseover.
 *     false         perform all animations at mouseover (and mouseout). (default)
 *   values:{effect:{base:base-value,enter:enter-value,leave:leave-value},...}
 *     effect = "lens"
 *                 CSS 'font-size' value.
 *     effect = "wave"
 *                 CSS 'top' and 'left' value.
 *     effect = "opacity"
 *                 CSS 'opacity' value.
 *     base-value  Used at on loading the page.
 *     enter-value Used at entering mouse.
 *     leave-value Used at leaving mouse.
 *   hover:[function1,function2]
 *      function    replace the animate function launched at mouseover to the user-customized hover functions
 *                  Attention: If this option is used, all the other options are ignored.
 *                  default : null (don't replace)
 *   easing:
 *      xxxx        animation easing value
 *                  default : linear
 *
 *   parser:
 *     jQuery.fn.moatext.parser_bychar    animate each characters.(default)
 *     jQuery.fn.moatext.parser_byword    animate each words.
 *     null                               animate all.
 *
 *   action_type:
 *     "cont"      Next animation is continued when the mouseover animation is over. (default)
 *     "hover"     Animation is invoked at both mouseover and mouseout.
 *     "over"      Animation is invoked only at mouseover.
 */
(function(jQuery) {
    var moaclass_str = '';
    var moafunc_str = '';
    
    jQuery.fn.moatext = function(options){
        var options = jQuery.extend( {},jQuery.fn.moatext.defaults,options);
        var valuedic = {};
        // deep copy
        for (var k1 in jQuery.fn.moatext.valuesdefaults) {
            var inner_dic = {};
            for (var k2 in jQuery.fn.moatext.valuesdefaults[k1]) {
                inner_dic[k2] = jQuery.fn.moatext.valuesdefaults[k1][k2];
            }
            valuedic[k1] = inner_dic;
        }
        var basecss = {};
        var entercss_str = '';
        var leavecss_str = '';
        moaclass_str = 'moa_char';
        moafunc_str = 'moa_func';
        basecss['display'] = 'inline-block';
        if (options.hover == null) {
            var lens_str = 'lens';
            var wave_str = 'wave';
            var base_str = 'base';
            var opacity_str = 'opacity';
            var enter_str = 'enter';
            var leave_str = 'leave';
            if (options.values != null) {
                for (var valuekey in options.values) {
                    for (var subvaluekey in options.values[valuekey]) {
                        valuedic[valuekey][subvaluekey] = options.values[valuekey][subvaluekey];
                    }
                }
            }
            options.values = valuedic;
            for (var effectNo in options.effects) {
                var effects = options.effects[effectNo];
                if (options.effects[effectNo] == lens_str) {
                    basecss['font-size'] = options.values[effects][base_str];
                    entercss_str += '"' +'fontSize' + '":"' + options.values[effects][enter_str] + '",';
                    leavecss_str += '"' + 'fontSize' + '":"' + options.values[effects][leave_str] + '",';
                }
                else if (options.effects[effectNo] == wave_str) {
                    basecss['top'] = options.values[effects][base_str][0];
                    basecss['left'] = options.values[effects][base_str][1];
                    entercss_str += '"top":"' + options.values[effects][enter_str][0] + '","left":"' + options.values[effects][enter_str][1] +'",';
                    leavecss_str += '"top":"' + options.values[effects][leave_str][0] + '","left":"' + options.values[effects][leave_str][1] +'",';
                }
                else if (options.effects[effectNo] == opacity_str) {
                    basecss['opacity'] = basecss['-moz-opacity'] = options.values[effects][base_str];
                    basecss['filter'] = 'alpha(opacity="'+Math.floor(parseFloat(options.values[effects][base_str])*100) + '")';
                    entercss_str += '"opacity":"' + options.values[effects][enter_str] + '",';
                    leavecss_str += '"opacity":"' + options.values[effects][leave_str] + '",';
                }
            }
        }
        moaclass_str += jQuery.fn.moatext.class_no.toString();
        moafunc_str += jQuery.fn.moatext.class_no.toString();
        jQuery.fn.moatext.class_no += 1;
        if (options.hover != null) {
            jQuery.fn.moatext.customfuncs[moafunc_str+'0'] = options.hover[0];
            jQuery.fn.moatext.customfuncs[moafunc_str+'1'] = options.hover[1];
            var func_def;
            func_def = "jQuery.fn.moatext."+moafunc_str+"_e = function(target){jQuery.fn.moatext.customfuncs['" + moafunc_str + "0'](target);};";
            eval(func_def);
            func_def = "jQuery.fn.moatext."+moafunc_str+"_l = function(target){jQuery.fn.moatext.customfuncs['" + moafunc_str + "1'](target);};";
            eval(func_def);
        }else {
            var duration_str = '';
            if (isNaN(Number(options.duration))) {
                duration_str = '"' + options.duration + '"';
            }
            else {
                duration_str += options.duration;
            }
            var func_leave_def = '';
            var leavecb = 'function(){jQuery(target).css("position","static");}';
            if (options.oneway == true || options.action_type == 'over') {
                func_leave_def = ';';
            }
            else {
                if (options.action_type == 'cont') {
                    func_leave_def = ".animate({" + leavecss_str.substring(0,leavecss_str.length-1) + '},' + duration_str + ',"' + options.easing + '",' + leavecb + ');';
                }
            }
            var enterfunc = "jQuery(target).css('position','relative');";
            if (options.action_type == 'hover') {
                var func_def = "jQuery.fn.moatext."+moafunc_str+"_e = function(target){" + enterfunc + "jQuery(target).animate({"+entercss_str.substring(0,entercss_str.length-1)+"}," + duration_str + ',"'+options.easing+'");};';
                eval(func_def);
                if (options.oneway == true) {
                    func_def = "jQuery.fn.moatext."+moafunc_str+"_l = function(target){};";
                    eval(func_def);
                }
                else {
                    func_def = "jQuery.fn.moatext."+moafunc_str+"_l = function(target){jQuery(target).animate({" + leavecss_str.substring(0,leavecss_str.length-1) + '},' + duration_str + ',"' + options.easing + '",' + leavecb + ')};';
                    eval(func_def);
                }
            }
            else {
                var func_def = "jQuery.fn.moatext."+moafunc_str+"_e = function(target){" + enterfunc + "jQuery(target).animate({"+entercss_str.substring(0,entercss_str.length-1)+"}," + duration_str + ',"'+options.easing+'")'+func_leave_def + '};';
                eval(func_def);
                func_def = "jQuery.fn.moatext."+moafunc_str+"_l = function(target){};";
                eval(func_def);
            }
        }
        var array = [];
        this.each(function(){
            var jqobj = jQuery(this);
            var baseString = jqobj.html();
            var wrappedString;
            if (options.parser == null) {
                wrappedString = jQuery.fn.moatext.wrapping(baseString);
            }
            else {
                wrappedString = options.parser(baseString);
            }
            if (options.hover == null) {
                jqobj.html(wrappedString).find("span."+moaclass_str).css(basecss);
            }
            else {
                jqobj.html(wrappedString).find("span."+moaclass_str).css('display','inline-block');
            }
            array.push(jqobj);
        });
        return array;
    };

    jQuery.fn.moatext.wrapping = function(targetStr) {
        return '<span class="' + moaclass_str + '" onmouseover="jQuery.fn.moatext.'+moafunc_str+'_e(this)" onmouseout="jQuery.fn.moatext.'+moafunc_str+'_l(this)">' + targetStr + '</span>';
    };
    
    jQuery.fn.moatext.parser_bychar = function(baseString) {
        var wrappedString = "";
        var inElement = false;
        var elementStr = "";
        var scriptNest = 0;
        var ref_buffer = "";
        for (var i = 0; i < baseString.length; i++) {
            var theChar = baseString.charAt(i);
            if (inElement == false) {
                if (theChar == '<') {
                    if (ref_buffer.length > 0) {
                        // This route is never passed.
                        wrappedString = wrappedString + ref_buffer;
                        ref_buffer = '';
                    }
                    inElement = true;
                    wrappedString = wrappedString + theChar;
                    continue;
                }
            }
            else {
                if (theChar == '>') {
                    inElement = false;
                    elementStr = elementStr.replace(/^[ ]+|[ ]+$/g,"");
                    if (elementStr.charAt(elementStr.length-1) != '/') {
                        if (elementStr.toUpperCase().indexOf("/SCRIPT") == 0) {
                            scriptNest = scriptNest - 1;
                        }
                        else if (elementStr.toUpperCase().indexOf("SCRIPT") == 0) {
                            scriptNest = scriptNest + 1;
                        }
                    }
                    elementStr = "";
                }
                else {
                    elementStr = elementStr + theChar;
                }
                wrappedString = wrappedString + theChar;
                continue;
            }
            if (inElement == false && ref_buffer.length == 0 && theChar == '&') {
                ref_buffer = '&';
                continue;
            }
            else if (ref_buffer.length > 0) {
                if (theChar == ';') {
                    ref_buffer += ';';
                    theChar = ref_buffer;
                }
                else {
                    ref_buffer += theChar;
                    if (ref_buffer.length > 9) {
                        theChar = '&';
                        i -= (ref_buffer.length - 1);
                    }
                    else {
                        continue;
                    }
                }
            }
            ref_buffer = '';
            var theCharCode = theChar.charCodeAt(0);
            if (scriptNest > 0 || theChar.replace(/[\s \t\r\n]/g,'') == '' || theChar == '&nbsp;' || theChar == '&#160;' || theCharCode == 8194 /* ensp */ || theCharCode == 8195 /* emsp */ || theCharCode == 8201 /* thinsp */ || theCharCode == 0x3000 /* utf-8 ideographic space */ ) {
                wrappedString += theChar;
            }
            else {
                wrappedString += jQuery.fn.moatext.wrapping(theChar);
            }
        }
        return wrappedString;
    };

    jQuery.fn.moatext.parser_byword = function(baseString) {
        var wrappedString = "";
        var inElement = false;
        var elementStr = "";
        var scriptNest = 0;
        var ref_buffer = "";
        var word_buffer = "";
        for (var i = 0; i < baseString.length; i++) {
            var theChar = baseString.charAt(i);
            if (inElement == false) {
                if (theChar == '<') {
                    if (ref_buffer.length > 0) {
                        // This route is never passed.
                        wrappedString = wrappedString + ref_buffer;
                        ref_buffer = '';
                    }
                    inElement = true;
                    wrappedString = wrappedString + theChar;
                    continue;
                }
            }
            else {
                if (theChar == '>') {
                    inElement = false;
                    elementStr = elementStr.replace(/^[ ]+/g,"");
                    if (elementStr.charAt(elementStr.length-1) != '/') {
                        if (elementStr.toUpperCase().indexOf("/SCRIPT") == 0) {
                            scriptNest = scriptNest - 1;
                        }
                        else if (elementStr.toUpperCase().indexOf("SCRIPT") == 0) {
                            scriptNest = scriptNest + 1;
                        }
                    }
                    elementStr = "";
                }
                else {
                    elementStr = elementStr + theChar;
                }
                wrappedString = wrappedString + theChar;
                continue;
            }
            if (inElement == false && ref_buffer.length == 0 && theChar == '&') {
                ref_buffer = '&';
                continue;
            }
            else if (ref_buffer.length > 0) {
                if (theChar == ';') {
                    ref_buffer += ';';
                    theChar = ref_buffer;
                }
                else {
                    ref_buffer += theChar;
                    if (ref_buffer.length > 9) {
                        theChar = '&';
                        i -= (ref_buffer.length - 1);
                    }
                    else {
                        continue;
                    }
                }
            }
            ref_buffer = '';
            var theCharCode = theChar.charCodeAt(0);
            if (scriptNest > 0) {
                word_buffer += theChar;
            }
            else if (theChar.replace(/[\s \t\r\n]/g,'') == '' || theChar == '&nbsp;' || theChar == '&#160;' || theCharCode == 8194 /* ensp */ || theCharCode == 8195 /* emsp */ || theCharCode == 8201 /* thinsp */ || theCharCode == 0x3000 /* utf-8 ideographic space */ ) {
                wrappedString += jQuery.fn.moatext.wrapping(word_buffer) + theChar;
                word_buffer = "";
            }
            else {
                word_buffer += theChar;
            }
        }
        if (word_buffer.length > 0) {
            wrappedString += jQuery.fn.moatext.wrapping(word_buffer);
        }
        return wrappedString;
    };
    
    jQuery.fn.moatext.valuesdefaults = {
        "lens":{"base":"100%","enter":"200%","leave":"100%"},
        "wave":{"base":["0px","0px"],"enter":["-10px","-10px"],"leave":["0px","0px"]},
        "opacity": {"base":"0.1","enter":"1.0","leave":"0.1"}
    };

    jQuery.fn.moatext.customfuncs = {};
    jQuery.fn.moatext.defaults = {
        effects: ["lens"],
        oneway: false,
        values: null,
        hover: null,
        easing: "linear",
        duration: 1000,
        animation: true,
        parser: jQuery.fn.moatext.parser_bychar,
        action_type: "cont"
    };
    jQuery.fn.moatext.key_class = "moatext";
    jQuery.fn.moatext.class_no = 1;

})(jQuery);

jQuery(function(){
    if (jQuery.fn.moatext.key_class != null && jQuery.fn.moatext.key_class.length > 0) {
        jQuery("."+jQuery.fn.moatext.key_class).moatext();
        jQuery("."+jQuery.fn.moatext.key_class+"_lens").moatext({effects:["lens"]});
        jQuery("."+jQuery.fn.moatext.key_class+"_wave").moatext({effects:["wave"]});
        jQuery("."+jQuery.fn.moatext.key_class+"_opacity").moatext({effects:["opacity"]});
    }
});
