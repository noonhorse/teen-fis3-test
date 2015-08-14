/**
 * login controller
 * @authors teen (hewendong@qiku.com/teen@163.com)
 * @date    2015-08-07 14:41:57
 * @version $Id$
 */

'use strict';


var config = require('../config'),
	path = require('path'),
	fs = require('fs');


var page = fs.readFileSync(path.join(__dirname, '../admin/views/index.html'), 'utf8')
  .replace('{{version}}', config.version);

module.exports = function* home(next) {
  this.body = page;
  //qianzhi;
  //db model>
  //return 
  //$this->view('index.php',$data);
  //
  //
  //
  //setTimeout(function(){   },2000);
  //
  //
  //setTimeout(function(){   },2000);
};
