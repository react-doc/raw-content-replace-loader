/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Kenny Wang @jaywcjlove
*/
const loaderUtils = require('loader-utils');
const PATH = require('path');
const FS = require('fs');
module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {};
  const { replace, sep, path, include, extensions } = options;
  let content = '';

  let fpath = this.resourcePath.replace(sep || /___/g, PATH.sep);
  if (path && replace && (!include || include.test(fpath))) {
    fpath = fpath.replace(path, replace);
    this.addDependency(fpath);
  }

  if (FS.existsSync(fpath)) {
    content = FS.readFileSync(fpath);
    content = content.toString();
  }
  content = JSON.stringify(content).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  return 'module.exports = ' + content;
}
