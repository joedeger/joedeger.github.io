var data = [
	{
		x: ['2019-03-31',
		'2019-04-1'],
		
		y: [25000,
		25020.20],

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
			info: ['March4-19-1-']
		},
		{
			title : 'DWT 28.78',
			start : '2019-03-04',
			info: ['March4-19-2-']
		},
		{
			title : 'DWT 22.86',
			start : '2019-03-04',
			info: ['March4-19-3-']
		},
		{
			title : 'UWT (26.22)',
			start : '2019-03-05',
			info: ['March5-19-1-']
		},
		{
			title : 'DWT 22.81',
			start : '2019-03-05',
			info: ['March5-19-2-']
		},
		{
			title : 'DWT 35.58',
			start : '2019-03-05',
			info: ['March5-19-3-']
		},
		{
			title : 'DWT (49.93)',
			start : '2019-03-06',
			info: ['March6-19-1-']
		},
		{
			title : 'DWT (37.90)',
			start : '2019-03-11',
			info: ['March11-19-1-']
		},
		{
			title : 'DWT 34.10',
			start : '2019-03-12',
			info: ['March12-19-1-']
		},
		{
			title : 'DWT (181.49)',
			start : '2019-03-13',
			info: ['March13-19-1-']
		},
		{
			title : 'DGAZ 26.30',
			start : '2019-03-13',
			info: ['March13-19-2-']
		},
		{
			title : 'DWT (47.12)',
			start : '2019-03-14',
			info: ['March14-19-1-']
		},
		{
			title : 'UGAZ 38.39',
			start : '2019-03-14',
			info: ['March14-19-2-']
		},
		{
			title : 'DWT 34.10',
			start : '2019-03-15',
			info: ['March15-19-1-']
		},
		{
			title : 'UWT ',
			start : '2019-03-18',
			info: ['March18-19-1-']
		},
		{
			title : 'DWT 42.10',
			start : '2019-03-19',
			info: ['March19-19-1-']
		},
		{
			title : 'DWT 35.10',
			start : '2019-03-20',
			info: ['March20-19-1-']
		},
		{
			title : 'UGAZ ',
			start : '2019-03-21',
			info: ['March21-19-1-']
		},
		{
			title : 'DWT ',
			start : '2019-03-22',
			info: ['March22-19-1-']
		},
		{
			title : 'DWT 21.10',
			start : '2019-03-25',
			info: ['March25-19-1-', '+0.69%', '7.23', '7.28', '/CL showed a descending pattern (lower lows/lower highs, breaking below middle VWAP). Entered after the EMA rejection at the VWAP', 'Placed a limit sell order at the same price level it hit last time since I was at school and not fully focused and didn\'t want to miss a potential bounce area. I was filled when I wasn\'t watching', 'Good entry and understanding of direction. Could have made more if I was paying attention']
		},
		{
			title : 'DWT (62.90)',
			start : '2019-03-26',
			info: ['March26-19-1-', '-1.03%', '6.79', '6.72', '/CL showed a consistant uptrend pattern. Plan was to wait for a bounce off SMA/VWAP to enter UWT. I thought about trading DWT at 10:06 but told myself not to trade DWT when /CL is still trading above the middle VWAP.', 'After seeing /CL pullback from a previuos resistance level and me being correct about wanting to trade DWT, I thought /CL was starting a downtrend. Got in after falling below the EMA and breaking SMA which was acting as a previous support. Got out because /CL made a higher high, and with the uptrend pattern it was showing I didn\' want to risk losing more', 'All in all a pretty bad trade. Told myself not to trade DWT when /CL was trading above the VWAP but I still did anyway because of fomo. Need to work on sticking to rules even if it prevents me from capitalizing on opportunities because they are put in place to help prevent loss. I should also have a more structured plan before entering the trade rather than reacting to the market']
		},
		{
			title : 'DWT 28.10',
			start : '2019-03-26',
			info: ['March26-19-2-', '+0.88%', '6.79', '6.85', '', '', '']
		},
		{
			title : 'DWT ',
			start : '2019-03-27',
			info: ['March27-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT ',
			start : '2019-03-27',
			info: ['March27-19-2-', '', '', '', '', '', '']
		},
		{
			title : 'DWT 7.10',
			start : '2019-04-01',
			info: ['April01-19-1-', '+0.46%', '6.42', '6.45', '/CL was showing an upward pattern. Was downtrending and fell below the middle VWAP. Started uptrending and broke the middle VWAP indicating an uptrend. Had a very strong push up on high volume, saw opportunity to capitalize on the pullback that was to come', 'Got out because /CL pullled back to the SMA line which could act as a support level and since /CL was trading above the middle VWAP I didn\'t want to miss my chance to lock in profits on the pullback', 'Not the best trade. Margin of profit was not large and I was trading against the pattern. I also took a trade on DWT while /CL was trading above the middle VWAP which is a bad habit. Did a good job of locking in profits on a risky trade']
		},
		{
			title : 'UWT 13.10',
			start : '2019-04-01',
			info: ['April01-19-2-', '+0.53%', '18.70', '18.80', '/CL had an uptrending pattern premarket and waited for an opportunity to get in. Waited for a break above the middle VWAP and then a pullback to get in. SMA acted as a support level for /CL and UWT pulled back to middle VWAP so I got in before the confirmation', 'Got out because of fear of a downtrend pattern starting. Pushed up after getting in but then showed signs of a pullback and didn\'t want to lose the profits I had and locked in profits even though my target exit was 18.95.', 'Why I entered the trade makes sense, as well as why I exited the trade. Might want to be more patient with trades and learn to recognize a pullback vs a reversal.']
		},
		{
			title : 'UWT ',
			start : '2019-04-02',
			info: ['April02-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT ',
			start : '2019-04-03',
			info: ['April03-19-1-', '', '', '', '', '', '']
		},
		/*{
			title : 'TSLA 5.90',
			start : '2019-04-05',
			info: ['April05-19-1-', '', '', '', '', '', '']
		},*/
		{
			title : 'DWT (14.95)',
			start : '2019-04-05',
			info: ['April05-19-2-', '-0.17', '5.94', '5.93', '', '', '']
		},
		{
			title : 'DWT 26.10',
			start : '2019-04-05',
			info: ['April05-19-2-', '+0.85', '5.88', '5.93', '', '', '']
		},
		{
			title : 'DWT 24.88',
			start : '2019-04-08',
			info: ['April08-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT 30.15',
			start : '2019-04-09',
			info: ['April09-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT 22.10',
			start : '2019-04-10',
			info: ['April10-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT (28.90)',
			start : '2019-04-11',
			info: ['April11-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'UWT (43.41)',
			start : '2019-04-11',
			info: ['April11-19-2-', '', '', '', '', '', '']
		},
		{
			title : 'DGAZ 31.10',
			start : '2019-04-11',
			info: ['April11-19-3-', '', '', '', '', '', '']
		},
		{
			title : 'DWT 22.10',
			start : '2019-04-12',
			info: ['April12-19-1-', '', '', '', '', '', '']
		},
		{
			title : 'DWT 22.10',
			start : '2019-04-12',
			info: ['April12-19-2-', '', '', '', '', '', '']
		}/*,
		{
			title : '',
			start : '',
			info: ['', '', '', '', '', '', '']
		}*/
	],

	eventClick: function(event) {
		stock = event.title.split(' ')[0];
		etfImgLink = 'media/' + event.info[0] + stock + '.PNG';
		if (stock == 'UWT' || stock == 'DWT') {
			futureImgLink = 'media/' + event.info[0] + 'CL.PNG';
		} else if (stock == 'DGAZ' || stock == 'UGAZ') {
			futureImgLink = 'media/' + event.info[0] + 'NG.PNG';
		}
		document.getElementById('etfImg').src = etfImgLink;
		document.getElementById('futureImg').src = futureImgLink;
		document.getElementById('PLpercent').innerHTML = event.info[1];
		if (event.info[1].charAt(0) == '+') {
			document.getElementById('PLpercent').style.color = '#92cd89';
		} else {
			document.getElementById('PLpercent').style.color = '#F9694A';
		}
		document.getElementById('entry').innerHTML = 'Entry: ' + event.info[2];
		document.getElementById('exit').innerHTML = 'Exit: ' + event.info[3];
		document.getElementById('whyEntry').innerHTML = event.info[4];
		document.getElementById('whyExit').innerHTML = event.info[5];
		document.getElementById('review').innerHTML = event.info[6];
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