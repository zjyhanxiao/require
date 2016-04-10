/**
 * Created by admin on 2016/4/8.
 */

/*require(['jquery'], function ($) {
    $("a").html("下面是一个幻灯片");
});*/
require(['jquery', 'myA'], function ($, a) {

    $("a").html("下面是一个幻灯片");
    //alert(a);
    console.log(a.add(1, 2));
});