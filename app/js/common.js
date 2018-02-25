/*timer_obj = {
    minutes_obj: $('.minutes'),
    hours_obj:   $('.hours'),
    seconds_obj: $('.seconds'),
    minutes:     $('.minutes').text(),
    hours:       $('.hours').text(),
    seconds:     $('.seconds').text(),
    void: function () {
        if(this.checkError()!=false){
            setTimeout(function () {
                timer_obj.seconds--;
                timer_obj.setValue('seconds',timer_obj.seconds);
                if(timer_obj.minutes == 0 && timer_obj.seconds==0){
                    timer_obj.hours--;
                    timer_obj.minutes=59;
                    timer_obj.seconds=59;
                    timer_obj.setValue('hours',timer_obj.hours);
                    timer_obj.setValue('minutes',timer_obj.minutes);
                    timer_obj.setValue('seconds',timer_obj.seconds);
                }
                if(timer_obj.seconds == 0){
                    timer_obj.minutes--;
                    timer_obj.seconds=60;
                    timer_obj.setValue('minutes',timer_obj.minutes);
                }
                timer_obj.void();
            }, 1000);
        }
    },
    setValue: function (name,value) {
        if (value % 10 >= 0 && value<10){
            value = '0' + value;
        }
        $('.'+name).text(value);
    },
    checkError: function () {
        if(this.minutes>60 || this.seconds>60) {
            this.setValue('minutes', 'error');
            this.setValue('seconds', 'error');
            this.setValue('hours', 'error');
            return false;
        }
    }
};
timer_obj.void();
*/

$(document).ready(
    function show_buy() {
    var button = $('.button-buy');
    var form = $('.buy-block_form');
    button[0].onclick = function (e) {
        console.log(e);
        form.css({
            'opacity' : 1,
            'position': 'relative',
            'right' : '0px'
        });
    }
});