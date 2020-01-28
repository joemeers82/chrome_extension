document.addEventListener('DOMContentLoaded', function(){
	const select   = document.querySelector('#member_list');
	//let ticketrows = document.querySelectorAll('.gridcontents_ticketmanagegrid_parent tr');
	const bg = chrome.extension.getBackgroundPage()

	console.log(bg.ticketrows);

	function tickets(ticketrows,name){
		const tickets = [];
		
		let ticketLength = bg.ticketrows.length;
		//console.log(ticketLength);
		alert(ticketLength);
		// const rows = document.querySelectorAll('.gridcontents_ticketmanagegrid_parent tr td:nth-of-type(5)');
		// rows.forEach( el => {
		// 	let colleague = el.innerText;
		// 	if(colleague.indexOf(name) !== -1){
		// 		tickets.push(colleague);
		// 	}
		// 	else{
		// 		el.parentNode.style.display='none';
		// 	}
		// })
		// let total = tickets.length;
		//return `${tickets[0]} has ${total} active tickets`;
	}

	select.addEventListener('change', (event)=>{
		
		chrome.tabs.executeScript(null,
      	{code:"let rows = document.querySelectorAll('.gridcontents_ticketmanagegrid_parent tr');"},
      	function(){
      		chrome.tabs.executeScript(null, {file: 'content.js'})
      	});
	})
	// const bg = chrome.extension.getBackgroundPage()

	

	// document.querySelector('button').addEventListener('click', onclick, false)

	// function onclick(){
	// 	chrome.tabs.query({currentWindow: true, active: true},
	// 		function (tabs){
	// 			chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
	// 		})
	// }
	// function setCount (res) {
	// 	const div = document.createElement('div')
	// 	div.textContent = `${res.count} bears`
	// 	document.body.appendChild(div);
	// }

}, false)