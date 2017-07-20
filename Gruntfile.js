module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //压缩
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      customvalidation:{
        src: 'dist/jquery.custom.validation.js',
        dest: 'dist/jquery.custom.validation.min.js'
      }
    },
    //合并
    concat:{
      options: {
        separator: ';\n',
      },
      customvalidation: {
        src: ['src/localization/messages_ch.js', 'src/custom-validation/*.js'],
        dest: 'dist/jquery.custom.validation.js',
      }
    }
  });

  // 加载任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify']);

};