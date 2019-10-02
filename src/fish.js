/**
 * fish.js源文件
 */


/**
 * 用来去掉换行
 */
function removeLines(_code) {
    let code = _code
    // 把所有换行符转换成空格
    code = code.replace(/\n/g, ' ');

    return code;
}

/**
 * 用来去掉缩进
 */
function removeTabs(_code) {
    let code = _code
    // 把所有缩进转换成空格
    code = code.replace(/\t/g, ' ');

    return code;
}

/** 
 * 压缩的主函数 
 */
function dried(_code) {
    let code = _code;
    code = removeLines(code);
    code = removeTabs(code);

    return code;
}