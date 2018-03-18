var mqtt=require('mqtt');
var client  = mqtt.connect('mqtt://192.168.0.3');
client.on('connect',function()
{
client.subscribe('m2s1lat1');
client.subscribe('m2s1long1');
client.subscribe('m3s1lat1');
client.subscribe('m3s1long1');
});


client.on('message', function (topic, message) {
 
//  console.log(message.toString());
//console.log("tarun bhavana");
if(topic=="m2s1lat1")
{
console.log("latitude ="+ " "+message.toString());
}
if(topic=="m2s1long1")
{
console.log("Longitude="+" "+message.toString());
}
if(topic=="m3s1lat1")
{
console.log("latitude ="+ " "+message.toString());
}
if(topic=="m3s1long1")
{
console.log("Longitude="+" "+message.toString());
}
});
