(jQuery)(document).ready(function ($){
    /**
     * Handle Plugin Deactivation Button Click
     */
    $(document).on('click', 'tr[data-plugin="RTL-CareUnit/RTL-CareUnit.php"] .deactivate a', function (e) {
        e.preventDefault();
        // noinspection JSUnresolvedVariable
        if (!rsm.hasOwnProperty('canDeactivate') || !rsm.canDeactivate) {
            return;
        }
        let html =
            '<div class="RSM-PDA-Wrapper">' +
            '<div class="RSM-PDA-Close" id="RSM-PDA-Close">' +
            '<span class="dashicons dashicons-no-alt"></span>' +
            '</div>' +
            '<div class="RSM-PDA-Icon">' +
            '<img src="data:image/png;base64,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" alt="هشدار">' +
            '<span class="RSM-PDA-Icon-Text">' + rsm.Translate.warning + '</span>' +
            '</div>' +
            '<div class="RSM-PDA-Description">' + rsm.Translate.disablePlugin +
            '<br>' +
            '<span class="RSM-PDA-Settings-Text">' +
            rsm.Translate.hideToNotShow +
            '</span>' +
            '</div>' +
            '<div class="RSM-PDA-BTN-Wrapper">' +
            '<div class="RSM-PDA-Actions">' +
            '<button class="RSM-BTN RSM-BTN-Red" id="RSM-PDA-Deactivate">' + rsm.Translate.deactivate + '</button>' +
            '<button class="RSM-BTN" id="RSM-PDA-Dismiss">' + rsm.Translate.dismiss + '</button>' +
            '</div>' +
            '<a class="button-link" target="_blank" id="RSM-PDA-Settings">' + rsm.Translate.settings + '</a>' +
            '</div>' +
            '</div>';
        $('body').append('<div class="RSM-Dimmer" style="display: none"><div class="RSM-Dimmer-Content"></div></div>');

        $(document).find('.RSM-Dimmer').fadeIn(100);

        if (html !== '') {
            $(document).find('.RSM-Dimmer .RSM-Dimmer-Content').html(html);
        }


        $.RSM_PD_URL = $(this).attr('href');
    });

    /**
     * Handle PDA Setting Button
     */
    $(document).on('click', '#RSM-PDA-Settings, .RSM-PDA-Settings-Link', function () {
        // noinspection JSUnresolvedVariable
        $(this).attr('href', rsm.page + '&tab=settings');
    });

    /**
     * Handle PDA Dismiss Buttons
     */
    $(document).on('click', '#RSM-PDA-Close, #RSM-PDA-Dismiss', function () {
        $('body .RSM-Dimmer').fadeOut(100, function () {
            $(this).remove();
        });
    });

    /**
     * Handle PDA Deactive Button
     */
    $(document).on('click', '#RSM-PDA-Deactivate', function () {
        $('.RSM-PDA-Wrapper').css('pointer-events', 'none').css('opacity', '.7');

        window.location.href = $.RSM_PD_URL;
    });

    /**
     * set notice to visited
     */
    $(document).on('click', '.rsm-notice-visited', function () {
       let error = $(this)
        let type = error.data('type')
        let slug = error.data('slug')

        if (type != '' && slug != ''){
            $.ajax({
                method: 'POST',
                url: rsm.url,
                data: {
                    'action': 'rsmAjaxNoticeVisited',
                    'nonce': rsm.nonce,
                    'tab': 'plugin',
                    'type': type,
                    'slug' : slug
                }
            })
        }
    });

    /**
     * update request
     */
    $(document).on('click','.rtl-update-plugin',function (e){
        e.preventDefault();
        let btn = $(this)
        let slug = btn.data('slug')
        let msg = btn.parents().closest('.rsm-update-message');
        let html = `<span class='rsm-loading rsm-notice-logo ' ></span>`;
          html += `<p>${ rsm.Translate.updating }</p>`
        msg.empty()
        msg.html(html)

         $.ajax({
             url:rsm.url,
             type: 'POST',
             data: {
                 'action': 'rsmAjaxUpdateProduct',
                 'nonce': rsm.nonce,
                 'tab': 'plugin',
                 'slug' : slug
             },
             dataType : 'json',
             success:function (resp){


                 let className = 'rsm-update-bg-red'
                 let src = rsm.obj.failed
                 if (resp.success){
                     className = 'rsm-update-bg-green'
                     src = rsm.obj.success
                 }
                 html = `<span class='rsm-notice-logo ' ><img src="${src}" alt="logo"></span>`;
                 // msg.addClass(className);
                 html += `<p>${ resp.data.message }</p>`
                 msg.empty()
                 msg.html(html)
             },
             error:function (resp){
                 let color = '#E88888EF'
                 msg.css('background-color', color);
                 msg.text('error connection')
             }
         })

    })

})
