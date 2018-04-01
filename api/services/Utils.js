/**
   * 
   *  PayloadBuilder Utility
   *  
   * @description create payload for upload API's that are corresponding 
   *              into required fields. If input field is not defined into
   *              reqParamsArr the input value will be ignored.
   * 
   * @param       reqParamArr - Array of names of the field required.
   *                            it is corresponding into db table.
   *              type: (String)
   * 
   * @param       params - Request Object, typically user's input fieldin the
   *                       form of Key-Value pair.
   * 
   * 
   * 
   *  this function returns Object type.
   * 
   */
module.exports.payloadBuilder = function (reqParamsArr, params) {
    var obj = {}
    reqParamsArr.forEach(k => {
        var index = Object.keys(params).indexOf(k);
        if (index >= 0) {
            var key = Object.keys(params)[index];
            obj[key] = params[Object.keys(params)[index]];
        }
    });

    return obj;
}