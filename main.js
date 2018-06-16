//  初始化
var data = init()
var keys = data.keys
var hash = data.hash

// 生成键盘
generateKeyboard(keys, hash)

// 用户点击
listenToUser(hash)

// 私有函数工具

function getFromLocalStorage(name){
	return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(targetName, attributes) {
	var element = document.createElement(targetName)
	for( var key in attributes) {
		element[key] = attributes[key]
	}
	return element
}

function createSpan(textContent) {
	var span = tag('span', {className: 'text'})
	span.textContent = textContent
	return span
}

function createButton(id) {
	var button = tag('button', {className: 'button'})
	button.id = id
	button.textContent = '编辑'
	button.onclick = function (xzkjcnxlkcjlk) {
	var x =	prompt('请输入网址')
	var button2 = xzkjcnxlkcjlk['target']
	var img2 = button2.previousSibling
	console.log(img2)
	var key = button2['id']
	hash[key] = x
	img2.src='http://' + x + '/favicon.ico'
	img.onerror = function(e) {
		e.target.src='//i.loli.net/2018/04/18/5ad750ef92f72.png'
	}
	localStorage.setItem('zzz', JSON.stringify(hash))
	}
	return button
}

function createImg(domain) {
	var img = tag('img')
	if (domain) {
		img.src='http://' + domain + '/favicon.ico'
	}else {
		img.src='//i.loli.net/2018/04/18/5ad750ef92f72.png'
	}
	img.onerror = function(e) {
		e.target.src='//i.loli.net/2018/04/18/5ad750ef92f72.png'
	}
	return img
}

function init () {
	var keys = {
		0: ['q','w','e','r','t','y','u','i','o','p'],
		1: ['a','s','d','f','g','h','j','k','l'],
		2: ['z','x','c','v','b','n','m'],
		length: '3'
	}
	var hash = {
		q: 'www.qq.com',
		w: 'weibo.com',
		e: 'ele.me',
		r: 'renren.com',
		t: 'tianya.com',
		y: 'youtobe.com',
		u: 'uc.com',
		i: 'iqiyi.com',
		o: 'opear.com',
		a: 'acfun.com',
		s: 'sohu.com',
		z: 'zhihu.com',
		m: 'www.mcdonalds.com.cn'
	}
	var hashInLocalStorage = getFromLocalStorage('zzz')
	if(hashInLocalStorage) {
		hash = hashInLocalStorage
	}
	return {
		'keys': keys,
		'hash': hash
	}
}

function generateKeyboard (keys, hash) {
	for (var index = 0; index < 3; index++) {
		var div = tag('div', {className: 'row'})
		main.appendChild(div)
		var row = keys[index]
		for (var index2 = 0; index2 < row.length; index2++) {
			var span = createSpan(row[index2])
			var button = createButton(row[index2])
			var img = createImg(hash[row[index2]])
			var kbd = tag('kbd', {className: 'key'})
				kbd.appendChild(span)
				kbd.appendChild(img)
				kbd.appendChild(button)
				div.appendChild(kbd)
		}		
	}
}

function listenToUser(hash) {
	document.onkeypress = function (xzkjcnxlkcjlk) {
		web = 'http://' + hash[xzkjcnxlkcjlk.key]
		window.open(web, '_blank')
	}
}
