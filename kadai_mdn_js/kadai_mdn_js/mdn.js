
const dataYear = () => {
    var item = new Date();
    console.log(item.getFullYear() + '年' + (item.getMonth() + 1) + '月' + item.getDate() + '日');
}

dataYear();