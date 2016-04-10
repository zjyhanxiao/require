/**
 * Created by admin on 2016/4/8.
 */
/*require(['jquery'], function ($) {
 $("a").html("下面是一个幻灯片");
 });*/
require(['jquery', 'myB'], function ($, b) {
    $("a").html("下面是一个幻灯片");
    //alert(b);
    console.log(b.sub(3, 2));
});