onmessage = function (e) {
    const num = e.data;
    for (let i = 0; i <= num; i += 1) {
        if (i === num) {
            // 2.向主线程发送数据
            postMessage('worker接收成功，向主线程发送数据：', i);
        }
    }
};
