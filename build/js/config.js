require.config({
    paths: { //基础路径和小名

        //第三方插件
        require:'vendor/requirejs/require',
        jquery: 'vendor/jquery/dist/jquery.min',
        pagination: 'vendor/pagination/jquery.pagination',
        validate:'vendor/jquery-validation/dist/jquery.validate',
        jqueryform:'vendor/jquery-form/dist/jquery.form.min',
        template:'vendor/artTemplate/template',


        //本地js文件
        index:'js/index',
        blogNotes:'js/blogNotes',
        blogInfo:'js/blogInfo',
        common:'js/common',
        blogDescNotesListInfocommon:'js/blogDescNotesListInfocommon'
    },

    shim: { //设置依赖关系
        pagination: {
            deps: ['jquery']
        },
        validate:{
            deps:['jquery']
        },
        jqueryform:{
            deps:['jquery']  
        }
    }
});

require(['common']);
