chartDatetimeFormatter   = d3.time.format("%d.%m.%y - %H:%M"); //see https://github.com/mbostock/d3/wiki/Time-Formatting
tableDatetimeFormatter   = d3.time.format("%d.%m.%y - %H:%M:%S"); //see https://github.com/mbostock/d3/wiki/Time-Formatting
//soapServiceHistDataUrl   = "http://raspberrypi:9999/historical-sensordata/";
//soapServiceLatestDataUrl = "http://raspberrypi:9999/latest-sensordata/";
soapServiceHistDataUrl   = "http://192.168.0.36:9999/historical-sensordata/";
soapServiceLatestDataUrl = "http://192.168.0.36:9999/latest-sensordata/";


$(function() {
  $("#fromdate").datepicker({
    changeMonth: true,
    onClose: function(selectedDate) {
      $("#todate").datepicker("option", "minDate", selectedDate);
    }
  });
  $("#todate").datepicker({
    changeMonth: true,
    onClose: function( selectedDate ) {
      $("#fromdate").datepicker("option", "maxDate", selectedDate);
    }
  });
});
