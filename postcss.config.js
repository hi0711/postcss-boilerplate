 module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-calc'),
    require('postcss-percentage'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('postcss-simple-vars'),
    require('postcss-csso'),
    require('autoprefixer') ( {
      borowsers: [ '>5%' ]
    } )
  ]
}
