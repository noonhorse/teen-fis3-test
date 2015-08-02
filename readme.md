#奇酷商城前端工程建设规划
##一、当前现状

**1、项目复杂化**
商城开发时间是13年，至今两年，在不停的开发新功能，未见重构迭代，当前逻辑功能已经跟不上商城运营需求，以至于当前运营修改商品参数和相关信息困难，查找和发布商品后前台也不能及时显示。
当前系统在活动发布，活动抢购时间设置，抢购数量，商品买卖配置，活动提示以及相关链接上的修改等，耗费开发和测试相当多的时间和精力。
当前系统的专题页比较散，没有正规的管理和处理界。
商品详情页在页面里处理和修改的东西太多，每次有什么变化只能改源码的文件
支付和订单页面对应的代码文件比较多

**2、命名不规范**

包括文件目录、文件以及代码上命名不规范导致使用混乱，未能代码复用。重复代码多，导致管理上不足，当一段代码出现漏洞，将要修改多个文件的多段代码，一致拉低整体效率。

**3、存放位置不规范**
项目文件存放位置混乱，无相应的规范和规则，在查找和修改上就会出现新问题。
当前系统在专题页面和活动页面的命名和代码管理方面就是这个方面问题。

**4、操作流程不规范**
现在的商城过度依赖工程师进行修改，使运营成本太高。修改和操作的风险性加大，系统的稳定性和扩展性随之降低。
在开发、测试、发布、运营没有各司其职，如：
- *前端*：注重前端工程化，建立一套适合运营人员操作的前端管理系统，以及以用户体验为中心，完善商城的功能和界面。
-	*开发*：职责应该是，做好系统规划、开发和debug，保证系统功能、可扩展性、安全性、性能等反面
-	*测试*：职责应该是：引用工程化的方法，测试系统的功能是否达到需求、性能是否达到预期，系统是否有漏洞和不足。
- *运维*：有一套完善大小版本和文件发布机制，辅助运营和开发建立完善的商城系统。
-	*运营*：负责使用商城系统的运营，是否符合运营要求，并提出系统不足，整理成需求交给开发重新开发相关功能。


**5、网站性能差**
网站页面请求过多，且没有合并请求
部分页面有重复请求，以及页面相关代码利用率不高
页面代码容错率不高，
商城渲染机制有不足。


##二、前端工程化目标
**1、前端资源编译发布管理系统**

**2、活动页面制作发布系统**

**3、前端组件库及规范系统**

**4、基于中间件的前端管理系统**

**5、前端自动化测试系统**

**6、前端性能量化反馈系统**

**7、前端用户行为监测系统**

##三、分步规划（前端系统和活动页面系统）
**1、前端构建系统或框架培训**

	> 当前系统框架分享  		 *1 Day*
	>
	> Grunt glup FIS 相关讲解分享  *2Day*
	>
	> 模块化思想相关规范培训			*1Day*


**2、node及相关规范培训**
	
	> node.js 介绍        *1Day*
	>
	> node.js 详解以及开发规范  *2Day*
	>
	> node.js 优秀框架分享和框架选定讨论	 *3Day*
	>

**3、功能需求和开发时间要求**
	
	> 功能需求分析和排期计划				*2.5 Day*
	>
	> 功能任务分配				*0.5 Day*
	> 
	> 前端系统基础功能开发  *10 Day*
	_登陆，菜单，系统配置，发布编译系统，_
	>
	>	
	>
	>
	>
	>
	>
	>
	>

