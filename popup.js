document.addEventListener('DOMContentLoaded', function(){
	function tickets(name){
		const tickets = [];
		const ticketLength = document.querySelectorAll('.gridcontents_ticketmanagegrid_parent tr').length;
		console.log(ticketLength);

		const rows = document.querySelectorAll('.gridcontents_ticketmanagegrid_parent tr td:nth-of-type(5)');
		rows.forEach( el => {
			let colleague = el.innerText;
			if(colleague.indexOf(name) !== -1){
				tickets.push(colleague);
			}
			else{
				el.parentNode.style.display='none';
			}
		})
		let total = tickets.length;
		console.log(`${tickets[0]} has ${total} active tickets`);
	}

	
	// const bg = chrome.extension.getBackgroundPage()

	// Object.keys(bg.bears).forEach(function(url){
	// 	const div = document.createElement('div')
	// 	div.textContent =`${url}: ${bg.bears[url]}`
	// 	document.body.appendChild(div)
	// })

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