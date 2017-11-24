var config = {
    accessToken: 'pk.eyJ1IjoiYmVpeWFuIiwiYSI6ImNqNjV2cXpybjI1c2wzM3A4d3RqYmw5NHkifQ.NvGAphptR7LDZZVYC--tWg'
};


//设置视图
var mymap = L.map('mapid').setView([51.505, -0.09], 13);


//添加瓦片图
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',  //mapbox.satellite(卫星云图)  mapbox.streets（城市道路图）
    accessToken: config.accessToken
}).addTo(mymap);


//添加位置标记
var marker = L.marker([51.5, -0.09]).addTo(mymap);


//添加圆
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


//添加三角形
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);


//弹出窗口只能同时显示一个
//给位置标记，圆，三角形分别绑定弹出窗口，其中位置标记的弹出窗口默认打开（而实际这里没有显示，可能是被下面的一个独立弹出窗口给覆盖了）
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");


//这是一个独立的弹出窗口（这是创建弹出窗口的另一种方式）
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);



//给地图绑定点击事件，点击地图弹出坐标信息
mymap.on('click', onMapClick1);
mymap.on('click', onMapClick2);

function onMapClick1(e) {
    alert("You clicked the map at " + e.latlng);
}

 function onMapClick2(e) {
     L.popup()
         .setLatLng(e.latlng)
         .setContent("You clicked the map at " + e.latlng.toString())
         .openOn(mymap);
 }

[{ // 第一个Y轴
    labels: {//刻度
        formatter: function() {
            return this.value +'°C';
        },
        style: {
            color: '#89A54E'
        }
    },
    title: {//y轴名称
        text: 'Temperature',
        style: {
            color: '#89A54E'
        }
    }
}, { // 第二个Y轴
    title: {
        text: 'Rainfall',
        style: {
            color: '#4572A7'
        }
    },
    labels: {
        formatter: function() {
            return this.value +' mm';
        },
        style: {
            color: '#4572A7'
        }
    },
    opposite: true //表示是否跟第一个在反方向位置
}]




