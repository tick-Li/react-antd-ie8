
完美兼容 ie >= 8;

本 demo 依赖 webpack + react + react-router-dom + antd + less;

	自己配时需注意各依赖的版本问题 ！

执行以下命令运行demo:

	npm install (安装相关依赖包)

	npm run dev (开发模式构建)

	npm start (运行项目)【注意：在第一次执行该命令前需先构建一次】

	npm run dll (公共依赖模块打包以提高编译速度)【生成的文件在 src/vendor 下，如有则不需执行该命令】

	npm run build (生产模式构建)