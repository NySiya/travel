$(document).ready(function() {
  $('#departure-date, #return-date').datepicker({
    format: "dd MM, yyyy",
    todayHighlight: true,
    orientation: "bottom auto",
    startView: 2,
    autoclose: true,
    toggleActive: true
  });
});
