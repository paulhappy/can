module.exports = {
 markdown: { //markdown编辑器的配置
   lineNumbers: true, //代码显示行号，默认 false
   toc: { includeLevel: [1, 2] }, //显示目录的默认层级
 },
 title: 'Vue教程', //网站的标题，默认主题几个地方用到
 description: 'Tingno记编写的VUE教程', //网站的描述
 base:'/can/', //要部署的根目录，不配置的话，都会到网站根目录下面
 themeConfig: { //主题的配置信息
 nav: [ //导航栏配置
 { text: '首页', link: '/' }, //没有子导航的，显示文字和链接
 { text: '基础', items: [ //有自导航的，就显示文字和子导航对象，下同
   { text: '入门', link: '/base/base' },
   { text: '常见文件', link: '/base/file' },
 ]}
 ],
 sidebar: [
   ['/','关于'],
   // {
   //   title: '技术',
   //   collapsable: true,
   //   children: [
   //     ['/jishu/MarkDownGrammer','md语法'],
   //     {
   //       title: '技术1',
   //       collapsable: true,
   //       children: [
   //         ['/jishu/MarkDownGrammer','目录1']
   //       ]
   //     }
   //   ]
   // },
   {
     title: 'iOS',
     collapsable: true,
     children: [
       ['/iOS/0.ram','内存管理']
     ]
   },
   {
     title: '随笔',
     collapsable: true,
     children: [
       ['/Other/Mark','Mark'],
       ['/Other/MarkDownGrammer','md语法']
     ]
   },
   // ['/page-a/f3','11']
 ],
 lastUpdated: 'Last Updated', // 显示最后更新时间
 //帮助编辑
 // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
 repo: 'q5276/vuestudy',
 // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
 // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
 repoLabel: '查看源码',
 // 以下为可选的编辑链接选项
 // 假如你的文档仓库和项目本身不在一个仓库：
 docsRepo: 'q5276/vuestudy',
 // 假如文档不是放在仓库的根目录下：
 docsDir: 'docs',
 // 假如文档放在一个特定的分支下：
 docsBranch: 'master',
 // 默认是 false, 设置为 true 来启用
 editLinks: true,
 // 默认为 "Edit this page"
 editLinkText: '帮助我们改善此页面！'
 }
}
