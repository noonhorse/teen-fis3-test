

//分配域名
fis.media('prod').match('*.js', {
    domain: 'http://cdn.baidu.com/'
});
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: ''
  })
})