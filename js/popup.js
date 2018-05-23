$('.btn-example').click(function() {
                var $href = $(this).attr('href');
                layer_popup($href);
            });

            function layer_popup(el) {

                var $el = $(el); //���̾��� id�� $el ������ ����
                var isDim = $el.prev().hasClass('dimBg'); //dimmed ���̾ �����ϱ� ���� boolean ����

                isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

                var $elWidth = ~~($el.outerWidth()),
                    $elHeight = ~~($el.outerHeight()),
                    docWidth = $(document).width(),
                    docHeight = $(document).height();

                // ȭ���� �߾ӿ� ���̾ ����.
                if ($elHeight < docHeight || $elWidth < docWidth) {
                    $el.css({
                        marginTop: -$elHeight / 2,
                        marginLeft: -$elWidth / 2
                    })
                } else {
                    $el.css({
                        top: 0,
                        left: 0
                    });
                }

                $el.find('a.btn-layerClose').click(function() {
                    isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // �ݱ� ��ư�� Ŭ���ϸ� ���̾ ������.
                    return false;
                });

                $('.layer .dimBg').click(function() {
                    $('.dim-layer').fadeOut();
                    return false;
                });

            }