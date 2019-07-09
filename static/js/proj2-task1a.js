$(document).ready(() => {
  // Learned from discussion session.
	$('.bg-purple').on('click', () => {
		$('.bg-purple').hide();
	});

	$('.bg-green').on('click', () => {
		$('.bg-green').hide();
		$('.bg-blue').hide();
	});

  // () => and function(){} are different.
	$('.bg-orange.p2-border').click(function () {
    $('.bg-orange.p2-border').not(this).hide();
	});

	$('#gradient-circle').on('mouseover', () => {
		$('#gradient-circle').hide();
  });
  
  $('#btn-reset').click(function () {
    $('.p2-circle').show();
  })
});