var data = [
	{
		x: ['2019-04-01'],
		
		y: [25000],

		type: 'scatter'
	}
];

Plotly.newPlot('chart', data);

function calculateProfit(prices, quantities, commission) {
	sell = prices[prices.length - 1];
	profit = 0;

	for (var i = 0; i < prices.length - 2; i++) {
		profit  += ((((sell - prices[i]) / sell) * (quantities[i] * prices[i])) - commission);
	}
	return profit;
}

var coll = document.getElementsByClassName('tab-section');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
  	tabs = document.getElementsByClassName('tab-section');
  	infoSections = document.getElementsByClassName('info-section');
  	for (i = 0; i < tabs.length; i++) {
  		if(tabs[i].classList.contains('active-tab')) {
  			console.log('toggle active-tab');
  			tabs[i].classList.toggle('active-tab');
  			console.log('toggle active-section');
  			infoSections[i].classList.toggle('active-section');
  		}
  	}
  	console.log('toggle active-tab');
    this.classList.toggle("active-tab");
    switch(this.textContent) {
    	case 'ETF':
    		console.log('toggling etf active-section');
    		infoSections[0].classList.toggle('active-section');
    		break;
    	case 'Future':
    		console.log('toggling future active-section');
    		infoSections[1].classList.toggle('active-section');
    		break;
    	case 'Notes':
    		console.log('toggling plan active-section');
    		infoSections[2].classList.toggle('active-section');
    		break;
    	default:
    		break;
    }
  });
}

$('#plan').css({
	'width': ($('#info').width() + 'px')
});
$('#eftImg').css({
	'width': ($('#info').width() + 'px')
});
$('#futureImg').css({
	'width': ($('#info').width() + 'px')
});


$('#calendar').fullCalendar({
	height: 500,
	weekends: false,
	events: [
		{
			title : 'UWT (23.00)',
			start : '2019-03-04',
			info: 'March4-19-1-'
		},
		{
			title : 'DWT 28.78',
			start : '2019-03-04',
			info: 'March4-19-2-'
		},
		{
			title : 'DWT 22.86',
			start : '2019-03-04',
			info: 'March4-19-3-'
		},
		{
			title : 'UWT (26.22)',
			start : '2019-03-05',
			info: 'March5-19-1-'
		},
		{
			title : 'DWT 22.81',
			start : '2019-03-05',
			info: 'March5-19-2-'
		},
		{
			title : 'DWT 35.58',
			start : '2019-03-05',
			info: 'March5-19-3-'
		},
		{
			title : 'DWT (49.93)',
			start : '2019-03-06',
			info: 'March6-19-1-'
		},
		{
			title : 'DWT (37.90)',
			start : '2019-03-11',
			info: 'March11-19-1-'
		},
		{
			title : 'DWT 34.10',
			start : '2019-03-12',
			info: 'March12-19-1-'
		},
		{
			title : 'DWT (181.49)',
			start : '2019-03-13',
			info: 'March13-19-1-'
		},
		{
			title : 'DGAZ 26.30',
			start : '2019-03-13',
			info: 'March13-19-2-'
		},
		{
			title : 'DWT (47.12)',
			start : '2019-03-14',
			info: 'March14-19-1-'
		},
		{
			title : 'UGAZ 38.39',
			start : '2019-03-14',
			info: 'March14-19-2-'
		},
		{
			title : 'DWT 34.10',
			start : '2019-03-15',
			info: 'March15-19-1-'
		},
		{
			title : 'UWT ',
			start : '2019-03-18',
			info: 'March18-19-1-'
		},
		{
			title : 'DWT 42.10',
			start : '2019-03-19',
			info: 'March19-19-1-'
		},
		{
			title : 'DWT 35.10',
			start : '2019-03-20',
			info: 'March20-19-1-'
		},
		{
			title : 'UGAZ ',
			start : '2019-03-21',
			info: 'March21-19-1-'
		},
		{
			title : 'DWT ',
			start : '2019-03-22',
			info: 'March22-19-1-'
		}/*,
		{
			title : '',
			start : '',
			info: ''
		}*/
	],

	eventClick: function(event) {
		stock = event.title.split(' ')[0];
		etfImgLink = 'media/' + event.info + stock + '.PNG';
		if (stock == 'UWT' || stock == 'DWT') {
			futureImgLink = 'media/' + event.info + 'CL.PNG';
		} else if (stock == 'DGAZ' || stock == 'UGAZ') {
			futureImgLink = 'media/' + event.info + 'NG.PNG';
		}
		document.getElementById('etfImg').src = etfImgLink;
		document.getElementById('futureImg').src = futureImgLink;
		document.getElementsByClassName('tab-section')[0].click();
	},

	eventColor: 'green',

	eventAfterRender: function(event, element, view) {
		PL = event.title.split(' ')[1];
		if (PL[0] == '(') {
			element.css('background-color', 'red');
			element.css('border-color', 'red');
		}	
	}
})