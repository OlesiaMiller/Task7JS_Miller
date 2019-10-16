(function($){

    var basket = document.getElementById('basket');
    var container = document.getElementById("container");
    var allContainers = document.getElementsByClassName('container_item');
    var imgCont = document.getElementsByClassName('container_item-img');
    var img = document.getElementsByClassName('img');
    var description = document.getElementsByClassName('container_item-description');
    var price = document.getElementsByClassName('container_item-price');
    var showMore = document.getElementById('showMore');
    var newDiscription = document.getElementById('newDiscription');
    var newCost = document.getElementById('newCost');
    var download = document.getElementById('download');
    var fileName = document.getElementById('fileName');
    var form = document.getElementById('form');
    var add = document.getElementById('add');
    var sortButton = document.getElementById('sort');
    var sortReversButton = document.getElementById('sortRevers');
    var startPrice = document.getElementById('startPrice');
    var endPrice = document.getElementById('endPrice');
    var findPrice = document.getElementById('findPrice');
    var available = document.getElementById('available');
    var markerString = document.getElementById('markerString');
    var cleanFilter = document.getElementById('cleanFilter');
    var basketContainer = document.getElementById('basket_container');

    



	var imgCollect = [{name: {one: 'images/Aloe-Vera5_1.jpg', two: 'images/Aloe-Vera5_2.jpg', three: 'images/Aloe-Vera5_3.jpg'} , description: 'Aloe Vera In Mini Dolores Planter', price: '$75', stock: 'Not Available'}, 
                      {name: {one: 'images/Aloe-Vera5_1.jpg', two: 'images/Aloe-Vera5_2.jpg', three: 'images/Aloe-Vera5_3.jpg'} , description: 'Aloe Vera In Mini Dolores Planter', price: '$50', stock: 'Available'},
                      {name: 'images/cactus-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$30', stock: 'Available'}, 
                      {name: 'images/cactus-18.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$81',stock: 'Available'}, 
                      {name: 'images/gorshok-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$150',stock: 'Available'}, 
                      {name: 'images/is3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$80',stock: 'Available'}, 
                      {name: 'images/th4.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/the-sill_1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$45',stock: 'Available'}, 
                      {name: 'images/the-sill_2.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$10',stock: 'Not Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$32',stock: 'Not Available'},    
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$45',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Not Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25',stock: 'Not Available'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$100',stock: 'Not Available'}
]
window.onload = function() {
    // localStorage.clear();
    cellClick(imgCollect);
    showMore.style.display = 'block';

   
}

// var download = document.getElementById('download');
var fileName = document.getElementById('fileName'); 

var z = 0;
var y = 8; // для подсчета товаров на странице

var imgCollectAvail = []; // массив для товара, который в наличии
var imgCollectBetween = []; // массив для фильтрации по цене
var count = 0;




var markerArr = {
    markerAvail: 0,
    markerCell: 1,
    markerBetween: 0,
    priceUp: 0,
    priceDown: 0 
    }; // объект для маркеров 
 

cleanFilter.addEventListener('click', function() {
    container.innerHTML = '';
    markerString.innerHTML = '';
    markerArr.markerAvail = 0;
    markerArr.markerBetween = 0;
    sortReversButton.style.color = 'black';
    sortButton.style.color = 'black';

    z = 0;
    y = 8;
    showMore.style.display = 'block';
    (markerArr.markerCell == 1) ? cellCreate(imgCollect) : cellClick(imgCollect);
})
add.addEventListener('click', function() {
    form.style.display = 'block';
    add.style.display = 'none';
})// вызов формы для добавления нового товара

download.addEventListener('click', function() {
    form.style.display = 'none';

    var imgName = fileName.value;
    localStorage.setItem('imgName', imgName);
    var imgName1 = localStorage.getItem(imgName);
    var testImg = document.getElementById('testImg');
    testImg.style.src = imgName1;

    let newGoods = {
	    name: 'uploads/' + imgName.substring(12),
	    description: newDiscription.value,
	    price: '$' + newCost.value
        }

    imgCollect.unshift(newGoods);
    container.innerHTML = '';

    cellClick(imgCollect);

    add.style.display = 'block';
    form.style.display = 'none';
    button.style.display = 'block';
    })
    // кнопка ДОБАВЛЕНИЯ НОВОГО ТОВАРА

available.addEventListener('click', function() {
    container.innerHTML = '';
    z = 0;
    y = 8;
    showMore.style.display = 'block';
    if (markerArr.markerBetween == 1) {
        isAvailable(imgCollectBetween);
    } else {
        isAvailable(imgCollect);
    }

   

    markerArr.markerAvail = 1;
    var p1 = document.createElement('p');
    p1.className = 'main_markers-items-item'
    p1.id = 'itemAvail';
    p1.innerHTML = ' наличие';
    markerString.appendChild(p1);
    var p2 = document.createElement('span');
    p2.className = 'item-close-block';
    p2.id = 'itemClose';
    p1.appendChild(p2);

    var close = document.createElement('i');
    close.className = 'fas fa-times item-close';
    p2.appendChild(close);
    

})// кнопка НАЛИЧИЕ



var isAvailable = function(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].stock == 'Available') {
            imgCollectAvail.push(arr[i]);
        }
    }
    (markerArr.markerCell == 1) ? cellClick(imgCollectAvail) : listClick(imgCollectAvail);
}// функция для сортировки по наличию


findPrice.addEventListener('click', function(){
    container.innerHTML = '';
    markerArr.markerBetween = 1;

    var p2 = document.createElement('p');
    p2.innerHTML = 'цена';
    markerString.appendChild(p2);

    imgCollectBetween = [];
    z = 0;
    y = 8;
  
    if (markerArr.markerCell == 1) {
        priceBetween(imgCollect)
    } else {
        priceBetween(imgCollect)
    }

}) //кнопка для фильтрации по цене

var priceBetween = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        // if (endPrice.value = '') {
        //     endPrice.value = Infinity;
        // }
        if (+arr[i].price.replace(reg, '') >= startPrice.value && +arr[i].price.replace(reg, '') <= endPrice.value) {
            imgCollectBetween.push(arr[i]);
        }
    }
    (markerArr.markerCell == 1) ? cellClick(imgCollectBetween) : listClick(imgCollectBetween);
} // функция для фильтрации по цене



var cellClick = function(arr) {

        for (let i = z; i < y; i++) {

        var n = document.createElement('div');
        n.className = 'container_item-grid';
        container.appendChild(n);

        var s = document.createElement('span');
        s.innerHTML = arr[i].stock;
        s.className = (s.innerHTML == 'Available') ? 'stock' : 'stock red';
        n.appendChild(s);

        var m = document.createElement('div');
        m.className = 'container_item-img container_item-list-img';
        n.appendChild(m);

        var baskPlus = document.createElement('i');
        baskPlus.className = 'fas fa-shopping-basket basket-plus basket-plus-grid'
        n.appendChild(baskPlus);

        var l = document.createElement('img');
        l.className = 'img img-list';
        if (typeof arr[i].name['one'] == "string") {
            l.setAttribute('src',arr[i].name.one);
            m.appendChild(l);
        } else {
            l.setAttribute('src',arr[i].name);
            m.appendChild(l);
        }
        m.appendChild(l);
        var r = document.createElement('div');
        r.className = 'container_item-description container_item-list-description';
        n.appendChild(r);

        var p = document.createElement('p');
        p.innerHTML = arr[i].description;
        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-price container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = arr[i].price;
        pr.appendChild(cost);

        if (typeof arr[i].name['one'] == "string") {

            var colorForm = document.createElement('form');
            colorForm.id = 'formColor';
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        } else {
            var colorForm = document.createElement('form');
            colorForm.id = 'formColor';
            colorForm.style.display = 'none';
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        }
    }
    
} // создание тегов для "сетки"


var cellCreate = function() {
    form.style.display = 'none';
    add.style.display = 'block';

    z = 0;
    y = 8;

    cellClick(imgCollect);
    for (let i = 0; i < allContainers.length; i++) {
        allContainers[i].classList.add('container_item-grid'); 
        allContainers[i].classList.remove('container_item-list'); 
    }
} // навешивание классов для сетки

var listClick = function(arr) {

    for (let i = z; i < y; i++) {
        var n = document.createElement('div');
        n.className = 'container_item-list';
        container.appendChild(n);

        var s = document.createElement('span');
        
        s.innerHTML = arr[i].stock;
        s.className = (s.innerHTML == 'Available') ? 'stock-list' : 'stock-list red';
        n.appendChild(s);

        var m = document.createElement('div');
        m.className = 'container_item-list-img';
        n.appendChild(m);

        var baskPlus = document.createElement('i');
        baskPlus.className = 'fas fa-shopping-basket basket-plus basket-plus-list'
        n.appendChild(baskPlus);

        var l = document.createElement('img');
        l.className = 'img img-list';
        if (typeof arr[i].name['one'] == "string") {
            l.setAttribute('src',arr[i].name.one);
            m.appendChild(l);
        } else {
            l.setAttribute('src',arr[i].name);
            m.appendChild(l);
        }
        
        var r = document.createElement('div');
        r.className = 'container_item-list-description';
        n.appendChild(r);

        var p = document.createElement('p');
        p.innerHTML = arr[i].description;

        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = arr[i].price;

        pr.appendChild(cost);

        if (typeof arr[i].name['one'] == "string") {

            var colorForm = document.createElement('form');
            colorForm.className = 'colorForm';
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        } else {
            var colorForm = document.createElement('form');
            colorForm.id = 'formColor';
            colorForm.style.display = 'none';
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        }

        
    }
} // создание "списка"

cell.addEventListener('click', function() {
    container.innerHTML = '';
    markerArr.markerCell = 1;
    z = 0;
    y = 8;

    if (markerArr.markerAvail == 1) {
        cellClick(imgCollectAvail)
    } else if (markerArr.markerBetween == 1) {
        cellClick(imgCollectBetween);

    } else {
        cellClick(imgCollect);

    }


}); // нажатие кнопки СЕТКИ

list.addEventListener('click', function() {
    container.innerHTML = '';

    markerArr.markerCell = 0;

    form.style.display = 'none';
    add.style.display = 'block';

    z = 0;
    y = 8;
    showMore.style.display = 'block';
    if (markerArr.markerAvail == 1) {
        listClick(imgCollectAvail)
    } else if (markerArr.markerBetween == 1) {
        listClick(imgCollectBetween);

    } else {
        listClick(imgCollect);

    }

    for (let i = 0; i < allContainers.length; i++) {
        allContainers[i].classList.add('container_item-list'); 
        allContainers[i].classList.remove('container_item-grid'); 
        imgCont[i].classList.add('container_item-list-img');
        img[i].classList.add('img-list'); 
        description[i].classList.add('container_item-list-description'); 
        price[i].classList.add('container_item-list-price'); 
    }
}) // кнопка присвоения классов СПИСКА



container.addEventListener('mousedown', function(e) {
        var one1 = document.getElementsByClassName('color-pink');
        var two2 = document.getElementsByClassName('color-green');
        var three3 = document.getElementsByClassName('color-white');

    if (e.target && e.target.nodeName == 'INPUT') {
        if (markerArr.markerBetween == 1 && markerArr.markerAvail == 1) {
            changeColor(imgCollectAvail, one1, two2, three3);
        } else if (markerArr.markerBetween == 1 && markerArr.markerAvail == 0) {
          changeColor(imgCollectBetween, one1, two2, three3)
    
        } else if (markerArr.markerBetween == 0 && markerArr.markerAvail == 1) {
            changeColor(imgCollectAvail, one1, two2, three3)
        } else {
            changeColor(imgCollect, one1, two2, three3);
        }
    }
}) // изменение картинки по цвету по нажатию на контайнер

    
var changeColor = function(arr, one1, two2, three3) {
    for (let i = 0; i <arr.length; i++) {
        if (typeof arr[i].name['one'] == "string") {
            one1[i].addEventListener('click', function(){
                img[i].src = arr[i].name.one;
            })
    
            two2[i].addEventListener('click', function(){
                console.log('нажала зеленый');
                img[i].src = arr[i].name.two;
            })
    
            three3[i].addEventListener('click', function(){
                img[i].src = arr[i].name.three;
            })

        };


    };


} // функция для индикаторов


var more = function(arr) {

    if (y >= arr.length) {
        
        showMore.style.display = 'none';
        y = 0;
        z = 8;
    }
    z += 8;
    y += 8;

    let containerCount = document.getElementsByClassName('container_item-grid');
    containerCount.length > 0 ? cellClick(arr) : listClick(arr);
} //функция для добавления еще 8 товаров

showMore.addEventListener('click', function() {
    console.log(markerArr);

    // console.log(marker);
    if (markerArr.markerBetween == 1 && markerArr.markerAvail == 1) {
        more(imgCollectAvail);
    } else if (markerArr.markerBetween == 1 && markerArr.markerAvail == 0) {

      more(imgCollectBetween)

    } else if (markerArr.markerBetween == 0 && markerArr.markerAvail == 1) {

        more(imgCollectAvail)
    } else {
        more(imgCollect);
    }



    // (markerArr.markerAvail == 1) ? more(imgCollectAvail) : more(imgCollect);
    
}) // кнопка ПРОГРУЗКИ новых изображений


sortButton.addEventListener('click', function() {
    container.innerHTML = '';
    console.log(markerArr);
    z = 0;
    y = 8;
    showMore.style.display = 'block';


    if (markerArr.markerAvail == 1) {
        priceCompare(imgCollectAvail)
    } else if (markerArr.markerBetween == 1) {
        priceCompare(imgCollectBetween);
    } else {
        priceCompare(imgCollect);
    }
    
    markerArr.priceUp = 1;
    sortButton.style.color = 'red';
    sortReversButton.style.color = 'black';

    
}) // кнопка сортировки по возрастанию цены

sortReversButton.addEventListener('click', function() {
    console.log(markerArr);
    console.log(imgCollectBetween);
    container.innerHTML = '';
    z = 0;
    y = 8;
    showMore.style.display = 'block';

    if (markerArr.markerAvail == 1) {
        priceCompareRevers(imgCollectAvail)
    } else if (markerArr.markerBetween == 1) {
        priceCompareRevers(imgCollectBetween)
    } else {
        priceCompareRevers(imgCollect);
    }

    markerArr.priceDown = 1;
    sortReversButton.style.color = 'red';
    sortButton.style.color = 'black';


    // var pd = document.createElement('p');
    // pd.className = 'main_markers-items-item'
    // pd.innerHTML = ' по убыванию';
    // markerString.appendChild(pd);
}) //кнопка для сортировки по УБЫВАНИЮ цены
var reg = /\D+/g;

function priceCompare(arr) {
    console.log(arr);
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
        
                if (+arr[j].price.replace(reg, '') > +arr[j + 1].price.replace(reg, '')) {
                    var swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                    wasSwap = true;
            }
    
        }
    
        if (!wasSwap) break;
    }

    if (markerArr.markerCell == 1) {
        cellClick(arr);
    } else {
        listClick(arr);
    }
    

} // функция для сортировки по УБЫВАНИЮ ЦЕНЫ


function priceCompareRevers(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
        
                if (+arr[j].price.replace(reg, '') < +arr[j + 1].price.replace(reg, '')) {
                    let swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                    wasSwap = true;
            }
    
        }
    
        if (!wasSwap) break;
    }
    console.log(arr);
    if (markerArr.markerCell == 1) {
        cellClick(arr);
    } else {
        listClick(arr);
    }

} // функция для сортировки по ВОЗРАСТАЮ ЦЕНЫ

container.onclick = function(event) {

    let buttonAdd = event.target.closest('.basket-plus');
    if(!buttonAdd) return;
    if(!container.contains(buttonAdd)) return;
  
    basketAdd(buttonAdd);

  };
var addArr = [];
// container.addEventListener('mousedown', function(e) {
//     console.log('нажала');
//     var basketArr = document.getElementsByClassName('basket-plus');

//     if (e.target && e.target.nodeName == 'I') {
//         basketAdd(basketArr, imgCollect);
//         // console.log(basketArr);
//         // console.log(imgCollect)

//     }
// }) 

var basketAdd = function(e) {
    count += 1;
    basketCount.innerHTML = count;
    var perentAdd = e.parentElement;

    var objectAdd = {
        imgAdd: perentAdd.children[1].children[0].src,
        discAdd: perentAdd.children[3].children[0].innerHTML,
        priceAdd: perentAdd.children[4].children[0].innerHTML.replace(reg, '')
    };
    addArr.push(objectAdd);
    var tov = JSON.stringify(addArr);
    localStorage.setItem("myKey", tov);

} // функция для индикаторов

var files; // переменная. будет содержать данные файлов

// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
	files = this.files;
});


// обработка и отправка AJAX запроса при клике на кнопку upload_files
$('.upload_files').on( 'click', function( event ){

	event.stopPropagation(); // остановка всех текущих JS событий
	event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

	// ничего не делаем если files пустой
	if( typeof files == 'undefined' ) return;

	// создадим данные файлов в подходящем для отправки формате
	var data = new FormData();
	$.each( files, function( key, value ){
		data.append( key, value );
	});

	// добавим переменную идентификатор запроса
	data.append( 'my_file_upload', 1 );

	// AJAX запрос
	$.ajax({
		url         : './submit.php',
		type        : 'POST',
		data        : data,
		cache       : false,
		dataType    : 'json',
		// отключаем обработку передаваемых данных, пусть передаются как есть
		processData : false,
		// отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
		contentType : false,
		// функция успешного ответа сервера
		success     : function( respond, status, jqXHR ){

			// ОК
			if( typeof respond.error === 'undefined' ){
				// файлы загружены, делаем что-нибудь

				// покажем пути к загруженным файлам в блок '.ajax-reply'

				var files_path = respond.files;
				var html = '';
				$.each( files_path, function( key, val ){
					 html += val +'<br>';
				} )

				$('.ajax-reply').html( html );
			}
			// error
			else {
				console.log('ОШИБКА: ' + respond.error );
			}
		},
		// функция ошибки ответа сервера
		error: function( jqXHR, status, errorThrown ){
			console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
		}
	});
});


})(jQuery)