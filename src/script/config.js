require.config({
    paths: { //基础路径和小名

        //第三方插件
        jquery: '../vendor/jquery/dist/jquery',
        pagination: '../vendor/pagination/jquery.pagination',
        validate:'../vendor/jquery-validation/dist/jquery.validate',


        //本地js文件
        index:'index'
    },

    shim: { //设置依赖关系
        pagination: {
            deps: ['jquery']
        },
        validate:{
            deps:['jquery']
        }
    }
});