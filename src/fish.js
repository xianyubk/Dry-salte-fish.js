/**
 * fish.js源文件
 * 如果你想帮助修改，请学习 "正则表达式"
 */


/**
 * 将所有(换行符(\n)、制表符(\t)、一个以上空格( +))(\s)换成单个空格
 */
function removeWhite(_code) {
    let code = _code;
    // 把所有换行符转换成空格
    code = code.replace(/\s+/g, ' ');

    return code;
}


/** 
 * 压缩的主函数 
 */
function dry(_code) {
    let code = _code;
    code = removeWhite(code);

    return code;
}