define([ 'jquery', 'tabhelper', 'utils/utils'], function($, tabHelper, utils) {

    $('form').on('submit', function(event) {
        var $form = $(this)
        var data = utils.serializeJson($form)
        $.ajax({
            type : 'post',
            dataType : 'json',
            url : '/auth/user/post',
            contentType: 'application/json',
            data : JSON.stringify(data),
        }).done(function(result) {
            if (result.status === 'ok') {
                alert('保存成功!')
                tabHelper.close(true)
            } else {
                alert(result.data)
            }
        }).fail(function(resp, msg, err) {
            alert(msg)
        })

        return false
    })

    $('[role=cancel]').on('click', function() {
        tabHelper.close(false)
    })

})