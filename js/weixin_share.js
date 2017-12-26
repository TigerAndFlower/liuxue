var ShareLink = "http://m.ieduchina.com/topic/liuxue/index.html"; //默认分享链接
var ShareImgUrl = 'http://m.ieduchina.com/topic/liuxue/img/Bitmap.png'; // 分享图标，获取页面第一张图
var ShareTitle = "你最适合去哪个国家留学?"; //分享标题
var ShareDesc = "世界那么大 我想去看看世界那么大 我该去哪里那么多国家可以去留学，你到底适合哪一个呢？快来答题测测吧~"; //分享描述
var ajaxurl = 'http://m.ieduchina.com/index.php?m=content&c=ajax&a=get_weixin_sign';
//var url = encodeURIComponent(location.href.split('#')[0]);
var url = location.href.split('#')[0];
$.ajax({
    type: "post",
    url: ajaxurl,
    data: {
        url: url
    },
    cache: false,
    async: false,
    dataType: 'json',
    success: function (data) {
        weixinSign = data;
    }
});
//console.log(weixinSign);

// 微信配置
wx.config({
    debug: false,
    appId: weixinSign.appId,
    timestamp: weixinSign.timestamp,
    nonceStr: weixinSign.nonceStr,
    signature: weixinSign.signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage',
        'onMenuShareQQ', 'onMenuShareQZone', 'hideOptionMenu',
        'onMenuShareWeibo'
    ]
    // 功能列表，我们要使用JS-SDK的什么功能
});

// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在 页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready 函数中。
wx.ready(function () {
    console.log("success");
    // 获取"分享到朋友圈"按钮点击状态及自定义分享内容接口
    wx.onMenuShareTimeline({
        title: ShareTitle, // 分享标题
        link: ShareLink,
        imgUrl: ShareImgUrl
        // 分享图标
    });

    // 获取"分享给朋友"按钮点击状态及自定义分享内容接口
    wx.onMenuShareAppMessage({
        title: ShareTitle, // 分享标题
        desc: ShareDesc, // 分享描述
        link: ShareLink,
        imgUrl: ShareImgUrl
        // 分享图标
    });
    // 分享到QQ
    wx.onMenuShareQQ({
        title: ShareTitle, // 分享标题
        desc: ShareDesc, // 分享描述
        link: ShareLink,
        imgUrl: ShareImgUrl
        // 分享图标
    });
    // 分享到QQ空间
    wx.onMenuShareQZone({
        title: ShareTitle, // 分享标题
        desc: ShareDesc, // 分享描述
        link: ShareLink,
        imgUrl: ShareImgUrl
        // 分享图标
    });
    //分享到腾讯微博
    wx.onMenuShareWeibo({
        title: ShareTitle, // 分享标题
        desc: ShareDesc, // 分享描述
        link: ShareLink, // 分享链接
        imgUrl: ShareImgUrl, // 分享图标
    });
});
wx.error(function (res) {
    console.log(res);
});