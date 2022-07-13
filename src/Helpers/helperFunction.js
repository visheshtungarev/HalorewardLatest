export const helperFunction = {
  getFilterDataList: (listArray, filterObj, callBack) => {
    // console.log("list ....", listArray);
    // console.log("list ....", filterObj);
    // console.log("list ....", listArray)
    let newArry = [];
    const fun = (ele) => {
      let isValueArray = [];
      filterObj.map((filter) => {
        if (filter?.values?.length > 0) {
          let arrayItems = filter.values.map(
            (value) => ele[filter.key]?.search(new RegExp(value, "gi")) >= 0
          );
          isValueArray.push(arrayItems.includes(true));
        }
      });
      return isValueArray;
    };

    listArray.map((item) => {
      let funAraay = fun(item);
      console.log("funaaray", funAraay);
      if (!funAraay.includes(false)) {
        newArry.push(item);
      }
    });
    callBack(newArry);
  },
};
