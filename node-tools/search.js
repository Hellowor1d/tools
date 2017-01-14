   var fs = require('fs');
   
   //遍历文件夹，获取所有文件夹里面的文件信息
   /*
   * @param path 路径
   *
   */
   
   function geFileList(path){
   	var	filesList = [];
  		readFile(path,filesList);
  		return filesList;
   }
   
   //遍历读取文件
   function readFile(path,filesList){

   	files = fs.readdirSync(path);//同步读取path路径下的文件，并返回文件名组成的数组
   	files.forEach(walk);

   function walk(file){ 

	 states = fs.statSync(path+'/'+file);   
   if(states.isDirectory()){

   readFile(path+'/'+file,filesList);

   }
   else{ 
  	//创建一个对象保存信息
  	var obj  = new Object();
  	obj.size = states.size;//文件大小，以字节为单位
  	obj.name = file;//文件名
  	obj.path = path+'/'+file; //文件绝对路径
  	filesList.push(obj);
   		}  
   	}
   }
   
   //写入文件utf-8格式
   // function writeFile(fileName,data) { 

   // fs.writeFile(fileName,data,'utf-8',complete);

   // function complete(){ 

   // console.log("文件生成成功");
  	//  } 
   // }
  
  //设置搜索文件夹的路径
   var filesList = geFileList("E:/task/2015");

   filesList.sort(sortHandler);

   function sortHandler(a,b){

   if(a.size > b.size){
  		return -1;
  	}else if(a.size < b.size){
  		 return 1
  	}else{
  		return 0
  	};
   }

   var  str="";
   for(var i=0;i<filesList.length;i++){

   var item= filesList[i];
   var desc="文件名:"+item.name + " " +"大小:"+(item.size/1024).toFixed(2) +"/kb"+" "+"路径:"+item.path+"" +"已修改"
   str+=desc +"\n";
   //同步方法
function modify(originalValue, newValue){
	var content = fs.readFileSync(item.path,'utf8');
		
		// console.info(content);  //打印原始数据

	var reg=new RegExp(originalValue,'g'); //创建正则RegExp对象

	var newdata = content.toString().replace(reg,newValue);

		fs.writeFileSync(item.path, newdata);

	// console.info(newdata);  //打印修改后的新数据
}


 var    myArgs = process.argv.slice(2,3);
 var    originalValue = process.argv.slice(3,4);
 var    newValue = process.argv.slice(4);

if ((myArgs ==  "modify" ) && originalValue && newValue){
	console.log("   ")
	console.log("***********修改程序开始执行***********")
	console.log("   ")
		 modify(originalValue,newValue);
		 
	console.log("----提示-----"+str)
	console.log("----提示-----"+originalValue+"替换为"+newValue)
	console.log("   ")
	console.log("***********修改程序执行完毕***********")
	console.log("   ")
}else{
	console.log("   ")
	console.log("***********请确认命令参数输入无误***********")
	console.log("   ")
}

   }
   
    // writeFile("test.txt",str);

	//使用方法： 先设置路径，然后命令行执行 node search.js modify originalValue newValue