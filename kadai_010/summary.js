$(function(){
    // 文字色を変更
    $('#change-color').on('click', function () {
        $(('#target')).css('color', 'skyblue');
    });
    
    // 挨拶を変更
    $('#change-text').on('click', function () {
         $('#target').text('こんばんは!');
    });

    // フェードアウト
    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });
});
