require.config({
    paths: { //基础路径和小名

        //第三方插件
        jquery: '../vendor/jquery/dist/jquery',
        pagination: '../vendor/pagination/jquery.pagination',
        validate:'../vendor/jquery-validation/dist/jquery.validate',
        jqueryform:'../vendor/jquery-form/dist/jquery.form.min',


        //本地js文件
        index:'../js/index',
        blogNotes:'../js/blogNotes'
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