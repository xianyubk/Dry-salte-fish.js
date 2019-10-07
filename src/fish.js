/*!
 * Dry-salte-fish
 * version: 1.0.0
 */

/**
 * 把所有注释删除
 * @param {string} _code - 要压缩的代码
 */
function removeAnnotation(_code) {
    let code = _code;
    // 把所有注释删除
    code = code.replace(/\/\/.*\n/g, '');
    return code;
}

/**
 * 将所有(换行符(\n)、制表符(\t)、一个以上空格( +))(\s)换成单个空格
 * @param {string} _code - 要压缩的代码
 */
function removeWhite(_code) {
    let code = _code;
    // 把所有换行符转换成空格
    code = code.replace(/\s+/g, ' ');

    return code;
}


/** 
 * 压缩的主函数 
 * @param {string} _code - 要压缩的代码
 */
function dry(_code) {
    let code = _code;
    code = removeAnnotation(code);
    code = removeWhite(code);

    return code;
}