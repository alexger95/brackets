module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let check = 0;
    let index = 0;
    str = str.split('');

    function indexSet() {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (stack[stack.length - 1] == bracketsConfig[j][0]) {
                index = j;
                bracketsConfig[j][0] != bracketsConfig[j][0] ? check = 0 : check = 1;;
                break;
            }
        }
        return index;
    }


    for (let i = 0; i < str.length; i++) {
        if (stack.length == 0) {
            stack.push(str[i]);
            indexSet();
        } else {
            if (str[i] == bracketsConfig[index][1]) {

                if (stack.length == 0) return false;

                stack.pop();
                indexSet();

            } else {
                stack.push(str[i]);
                indexSet();
            }
        }


    }
    return stack.length == 0 ? true : false;
}