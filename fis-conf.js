'use strict';

var path = require('path'),
	meta = require('./package.json');



fis
    // 排除指定目录
    .set('project.files', ['**', '.**', '.**/**'])
    .set('project.ignore', ['node_modules/**', '.gitignore', '.*/**','admin/**','config/**','controller/**','fis-conf.js'])
    // 把scss映射为css
    .set('project.ext', {
        scss : 'css',
        less : 'css'
    })
    .set('name', meta.name)
    .set('version', meta.version)
    .set('urlPrefix', config.urlPrefix)
    .set('dest', /^\./i.test(config.dest) ? path.resolve(__dirname, config.dest) : config.dest)
    .set('framework', {
        cache: config.LSCache, //开启localstorage缓存
        combo: config.combo, // 开启合并
        comboPattern: config.comboPattern,
        urlPattern: config.urlPattern, // 静态资源加载路径模式
        urlPrefix: config.urlPrefix // 静态资源加载路径模式
    });

// 测试环境屏蔽Hash
if (config.env === 'development') {
    fis.set('framework.useHash', false);
} else {
    fis.set('framework.useHash', true);
}


/**
 ******************** 开发测试 *******************
 */
fis
	.match('**', {
		useHash:false
	})
	//less编译
	.match('*.less', {
	  parser: fis.plugin('less'),// fis-parser-less 插件进行解析
	  rExt: '.css'// .less 文件后缀构建后被改成 .css 文件
	})
	// 启用 fis-spriter-csssprites 插件
	.match('::package', {
	  spriter: fis.plugin('csssprites'),
	  postpackager: fis.plugin('loader', {
	  	useInlineMap: true, // 资源映射表内嵌
	    allInOne: false
	  })
	})
	//html中声明依赖
	.match('*.html', {
    useMap: true
	})
	// 所有的 js
	.match('*.js', {
		isMod: false,
    //发布到/static/js/xxx目录下
    release : '/static/js$0'
	})
	//
	// .match('component/**/*.js', {
	// 	isMod: true
	// })
	// .match('js/base/**.js', {
	// 	isMod: true
	// })
	// 所有的 css
	.match('*.{css,less}', {
		// 给匹配到的文件分配属性 `useSprite`
  	useSprite: true,
    //发布到/static/css/xxx目录下
    release : '/static/css$0'
	})
	// 所有image目录下的.png，.gif文件
	.match('*.{png,gif,jpg,jpeg}', {
    //发布到/static/pic/xxx目录下
    release: '/static/images$0'
	});
//支持amd 规范
fis.hook('module', {
		paths:{
			jquery:'js/lib/jquery-1.8.2.min',
			zepto:'js/lib/zepto-1.1.2.min'
		},
	  mode: 'auto', // 模块化支持 amd 规范，适应 require.js
	  //shim:{},
	  forwardDeclaration: true
	});
/**
 ********************* 发布打包  *****************
 */

fis.media('prod')
	.match('**.{js,css,png}', {
		useHash:true
	})
	// 启用 fis-spriter-csssprites 插件
	.match('::package', {
  spriter: fis.plugin('csssprites')
	})
	// 清除其他配置，只保留如下配置
	.match('**.js', {
	  // fis-optimizer-uglify-js 插件进行压缩，已内置
	  optimizer: fis.plugin('uglify-js')
	})
	.match('**.css', {
		useSprite: true,// 对 CSS 进行图片合并
	  // fis-optimizer-clean-css 插件进行压缩，已内置
	  optimizer: fis.plugin('clean-css')
	})
	.match('**.png', {
	  // fis-optimizer-png-compressor 插件进行压缩，已内置
	  optimizer: fis.plugin('png-compressor')
	});

//分配域名
// fis.media('prod')
// .match('*.js', {
//     domain: 'http://js.qiku.com/'
// })
// .match('*.css',{
// 		domain:'http://css.qiku.com/'
// })
// .match('*.{png,jpg,gif,jpeg}',{
// 		domain:'http://res.qiku.com'
// })
// .match('*', {
//   deploy: fis.plugin('local-deliver', {
//     to: ''
//   })
// })